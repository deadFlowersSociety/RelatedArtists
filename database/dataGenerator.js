let mysql = require ('mysql');
let fs = require('fs');

let connection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'artists',
});

fs.readFile('./Data/artistsData-1.json', 'utf8', (err, data) => {
  if (err) throw err;
  artists = JSON.parse(data);
  console.log(artists[999999]);
  for (let j = 0; j < 100000; j++) {
    connection.query (
      `INSERT INTO artist (artist_name, listeners, artist_image, popularSong, artist_genre) VALUES("${artists[j].artist_name}", "${artists[j].listeners}", "${artists[j].artist_image}", "${artists[j].popularSong}", "${artists[j].artist_genre}")`,
      function (error, result, fields) {
        if (error) {
          console.log (error);
        } 
      }
    );
  }
  console.log("Done Artists");
});

// fs.readFile('genreData-1.json', 'utf8', (err, data) => {
//   if (err) throw err;
//   genres = JSON.parse(data);
//   console.log("Done parsing");
//   for (let j = 0; j < 500000; j++) {
//     connection.query (
//       `INSERT INTO genre0 (main_artist_id) VALUES("${genres[j].main_Artist_ID}")`,
//       function (error, result, fields) {
//         if (error) {
//           console.log (error);
//         } 
//       }
//     );
//   }
//   console.log("Done Genres");
// });

// fs.readFile('relatedArtistsData.json', 'utf8', function (err, data) {
//   if (err) throw err;
//   relatedArtists = JSON.parse(data);
//   for (let j = 0; j < relatedArtists.length; j++) {
//     connection.query (
//       `INSERT INTO relatedArtists (related_Artist_ID, main_Artist_ID) VALUES("${relatedArtists[j].related_Artist_ID}", "${relatedArtists[j].main_Artist_ID}")`,
//       function (error, result, fields) {
//         if (error) {
//           console.log (error);
//         } else {
//           console.log("Related Artist Relationship", j, " logged out of ", relatedArtists.length);
//         }
//       }
//     );
//   }
// });
