const cassandra = require('cassandra-driver');
// const fs = require('fs');
const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: 'relatedArtists' });
 
// fs.readFile('./Data/artistsData-1.json', (err, data) => {
//   if (err) console.error(err);
//   let json = JSON.parse(data);
//   console.log("We're here", json.length)
//   for (var i = 0; i < json.length; i++) {
//     let query = "INSERT INTO artist JSON '" + JSON.stringify(json[i]) + "'";
//     client.execute(query, function(err, result) {
//       if (err) console.log(err);
//     });
//   }
// })

var w = 10;

client.execute("COPY artist(artistid, artist_name, listeners, artist_image, popularsong, relatedartists) FROM '/Users/wissemgamra/Desktop/SDC/RelatedArtists/Data/newCSV/artistsData-" + w + ".csv' WITH DELIMITER '|' AND HEADER = TRUE", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("yayyy");
    client.end()
  }
})