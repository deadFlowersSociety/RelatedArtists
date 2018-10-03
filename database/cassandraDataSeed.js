const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: 'relatedArtists' });

var w = 10;

client.execute("COPY artist(artistid, artist_name, listeners, artist_image, popularsong, relatedartists) FROM '/Users/wissemgamra/Desktop/SDC/RelatedArtists/Data/newCSV/artistsData-" + w + ".csv' WITH DELIMITER '|' AND HEADER = TRUE", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("yayyy");
    client.end()
  }
})