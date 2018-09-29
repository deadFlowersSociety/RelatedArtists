const { Client } = require('pg')
const connectionString = 'postgresql://:@localhost:5432/mydb'

const client = new Client({
  connectionString: connectionString,
})
client.connect()

// We have to manually increment w from 1 to 10
var w = 1;
var fileId = w - 1;

client.query("COPY artist(artist_name, listeners, artist_image, popularSong, artist_genre) FROM '/Users/wissemgamra/Desktop/SDC/RelatedArtists/Data/artistsData-" + w + ".csv' DELIMITER ',' CSV HEADER;", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("yayyy");
    client.end()
  }
})

client.query("COPY genre" + fileId + "(main_artist_id) FROM '/Users/wissemgamra/Desktop/SDC/RelatedArtists/Data/genreData-" + w + ".csv' DELIMITER ',' CSV HEADER;", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("yayyy");
    client.end()
  }
})