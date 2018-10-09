const { Pool } = require('pg');
const connectionString = 'postgresql://:@localhost:5432/mydb'

const pool = new Pool({
  connectionString: connectionString,
})

let genreOptions = {
  1: "Pop",
  2: "Rock",
  3: "Country",
  4: "Alternative",
  5: "Rap",
  6: "R&B",
  7: "Opera",
  8: "Jazz",
  9: "Classical",
  10: "Indie"
}

const getRelatedArtists = (id, callback) => {
  var artId = ( id - id%1000000 ) / 1000000;
  var genreIdBegin = id%1000000;
  var genreIdEnd = (genreIdBegin + 11)%1000000;

  if (genreIdEnd < 15) {
    pool.query("SELECT * FROM artist WHERE artistID in (SELECT main_artist_id FROM genre" + artId + " WHERE id > " + genreIdBegin + " OR id < " + genreIdEnd + ");")
      .then(result => callback(null, result))
      .catch(error => callback(error, null));
  } else {
    pool.query("SELECT * FROM artist WHERE artistID in (SELECT main_artist_id FROM genre" + artId + " WHERE id > " + genreIdBegin + " AND id < " + genreIdEnd + ");")
      .then(result => callback(null, result))
      .catch(error => callback(error, null));
  }
};

const postNewArtist = (artist, callback) => {
  pool.query("INSERT INTO artist(artist_name, listeners, artist_image, popularsong, artist_genre) VALUES ('" + artist.artist_name + "', '" + artist.listeners + "', ''" + artist.artist_image + "'', ''" + artist.popularsong + "'', ''" + artist.artist_genre + "'');")
    .then(result => {
      pool.query("SELECT artistid FROM artist ORDER BY artistid DESC LIMIT 1;")
        .then(result => {
          pool.query("INSERT INTO genre" + genreOptions[artist.artist_genre] + "(main_artist_id) VALUES('" + result.rows[0] + "');")
            .then(result => callback(null, result))
            .catch(error => callback(error, null));
        })
        .catch(error => callback(error, null));
    })
    .catch(error => callback(error, null));
};


module.exports.getRelatedArtists = getRelatedArtists;
module.exports.postNewArtist = postNewArtist;
