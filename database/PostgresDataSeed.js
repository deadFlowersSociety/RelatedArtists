const { Pool } = require('pg')
const connectionString = 'postgresql://root:root@localhost:5432/mydb'

const pool = new Pool({
  user: 'power_user',
  host: '18.191.156.91',
  database: 'mydb',
  password: '$poweruserpassword',
  port: '5432'
 })

// We have to manually increment w from 1 to 10
var w = 10;
var fileId = w - 1;

// pool.query("COPY artist(artist_name, listeners, artist_image, popularSong, artist_genre) FROM '/home/ec2-user/newCSV/artistsData-" + w + ".csv' DELIMITER ',' CSV HEADER;", (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("yayyy", w);
//     pool.end()
//   }
// })

pool.query("COPY genre" + fileId + "(main_artist_id) FROM '/home/ec2-user/newCSV/genreData-" + w + ".csv' DELIMITER ',' CSV HEADER;", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("yayyy", w);
    pool.end()
  }
})