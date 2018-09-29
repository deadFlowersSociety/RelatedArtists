const { Client } = require('pg')
const connectionString = 'postgresql://:@localhost:5432/mydb'

const client = new Client({
  connectionString: connectionString,
})
client.connect()

client.query('DROP TABLE IF EXISTS artist;', (err, res) => {
  if (err) {
    console.log(err);
  } else {
    client.query('CREATE TABLE IF NOT EXISTS artist ( artistID SERIAL PRIMARY KEY, artist_name VARCHAR(40) NOT NULL, listeners INT, artist_image VARCHAR(200) NOT NULL, popularSong VARCHAR(30) NOT NULL,artist_genre VARCHAR(30) NOT NULL);', (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log("yayyy", res);
        client.end()
      }
    })
  }
})