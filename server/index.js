require('newrelic');
const express = require('express');
const cluster = require('cluster');
const os = require('os');
// const compression = require('compression');
// const bodyParser = require('body-parser');
const path = require('path');
const { getRelatedArtists, postNewArtist, editArtist, deleteArtist } = require('../database/postgresIndex.js');
const cors = require('cors');
const redis = require('redis');
const clientRedis = redis.createClient();

if (cluster.isMaster) {
  const cpuCount = os.cpus().length
  for (let i = 0; i < cpuCount/2; i++) {
      cluster.fork()
  }
} else {
  const server = express();

  // server.use(bodyParser.json());
  // server.use(express.urlencoded({ extended: true }));
  server.use(cors());
  // server.use(compression());
  server.use(express.static(path.join(__dirname, '../public')));

  server.get(`/relatedArtists/artist/:id`, (req, res) => {

    clientRedis.get(req.params.id, (err, result) => {
      if (result) {
        res.send(result);
      } else {
        getRelatedArtists (req.params.id, (error, data) => {
          if (error) {
            res.status(400).send(error);
          } else {
            clientRedis.setex(req.params.id, 3600, JSON.stringify(data.rows));
            res.send(data.rows);
          }
        });
      }
    })
  });

  server.post(`/relatedArtists/artist/newArtist`, (req, res) => {
    postNewArtist (req.body.artist, (error, data) => {
      if (error) {
        res.status(400).send(error);
      } else {
        res.send("Posted!");
      }
    });
  });

  server.put(`/relatedArtists/artist/:id`, (req, res) => {
    editArtist (req.params.id, req.body.artist, (error, data) => {
      if (error) {
        res.status(400).send(error);
      } else {
        res.send("Edited!");
      }
    });
  });

  server.delete(`/relatedArtists/artist/delete/:id`, (req, res) => {
    deleteArtist (req.params.id, (error, data) => {
      if (error) {
        res.status(400).send(error);
      } else {
        res.send("Deleted!");
      }
    });
  });

  server.listen (3002, () => {
    console.log ('listening on port 3002!');
  });

}

cluster.on('exit', (worker) => {
  console.log('mayday! mayday! worker', worker.id, ' is no more!')
  cluster.fork()
})
