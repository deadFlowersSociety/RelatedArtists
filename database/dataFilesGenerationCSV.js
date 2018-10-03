let faker = require ('faker');
let fs = require('fs');

// When generating data, one needs to manually run this file 10 times
// each time, w should be incremented, starting from 1, ending at 10
let w = 10;

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


  let artistsResults = 'artistid|artist_name|listeners|artist_image|popularsong|related_artists\n';

  for (let i = 0; i < 1000000; i++) {
    artistsResults += `${i + 1 + (w - 1) * 1000000}|${faker.name.findName ()}|${faker.random.number ()}|https://s3.us-east-2.amazonaws.com/spotifyalbumplayer/Related+Artists+Images/${i % 910}.webp|${faker.lorem.word ()}|${genreOptions[w]}\n`
  }
  
  console.log("Artists Data created");
  
  fs.writeFile('./Data/newCSV/artistsData-'+ w + '.csv', artistsResults, 'utf8', (err) => {
    if (err) throw err;
    console.log("Artists Data File written!", w);
  });


  // let genreResults = 'id,main_Artist_ID\n';
  // for (let i = 0; i < 1000000; i++) {
  //   genreResults += `${i + (w-1) * 1000000}\n`;
  // }
  
  // console.log("Genre Data created");
  
  // fs.writeFile('./Data/genreData-'+ w + '.csv', genreResults, 'utf8', (err) => {
  //   if (err) throw err;
  //   console.log("Genre Data File written!", w);
  // });