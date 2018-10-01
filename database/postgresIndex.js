const { Client } = require('pg')
const connectionString = 'postgresql://:@localhost:5432/mydb'

const client = new Client({
  connectionString: connectionString,
})
client.connect()

const getRelatedArtists = function (id, showArtist) {

  var artId = ( id - id%1000000 ) / 1000000;
  var genreIdBegin = id%1000000;
  var genreIdEnd = (genreIdBegin + 11)%1000000;

  if (genreIdEnd < 15) {
    client.query("SELECT * FROM artist WHERE artistID in (SELECT main_artist_id FROM genre" + artId + " WHERE id > " + genreIdBegin + " OR id < " + genreIdEnd + ");", (err, res) => {
      if (err) {
        console.log(err);
        showArtist (error, null);
      } else {
        console.log ('db query success', res.rows[0]);
        showArtist (null, res.rows);
      }
    });
  } else {
    client.query("SELECT * FROM artist WHERE artistID in (SELECT main_artist_id FROM genre" + artId + " WHERE id > " + genreIdBegin + " AND id < " + genreIdEnd + ");", (err, res) => {
      if (err) {
        console.log(err);
        showArtist (error, null);
      } else {
        console.log ('db query success', res.rows[0]);
        showArtist (null, res.rows);
      }
    });
  }
};


module.exports.getRelatedArtists = getRelatedArtists;
