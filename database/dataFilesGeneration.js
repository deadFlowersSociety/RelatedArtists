let faker = require ('faker');
let fs = require('fs');

// When generating data, one needs to manually run this file 10 times
// each time, w should be incremented, starting from 1, ending at 10
let w = 1;

// let genreOptions = {
//   1: "Pop",
//   2: "Rock",
//   3: "Country",
//   4: "Alternative",
//   5: "Rap",
//   6: "R&B",
//   7: "Opera",
//   8: "Jazz",
//   9: "Classical",
//   10: "Indie"
// }

// for (var w = 1; w < 11; w++) {
  let artistsResults = [];
  for (let i = 0; i < 100000; i++) {
    var relArtArr = [];
    var randomId;
    for (var j = 0; j < 10; j++) {
      randomId = Math.floor(Math.random () * Math.floor (10000000));
      while (randomId === (w-1) * 1000000 + i + 1) {
        randomId = Math.floor(Math.random () * Math.floor (10000000));
      }
      relArtArr.push(randomId);
    }
    artistsResults.push ({
      artistid: (w-1) * 1000000 + i + 1,
      artist_name: faker.name.findName (),
      listeners: faker.random.number (),
      artist_image: `https://s3.us-east-2.amazonaws.com/spotifyalbumplayer/Related+Artists+Images/${i % 910}.webp`,
      popularsong: faker.lorem.word (),
      related_artists: relArtArr
    });
  }
  
  console.log("Artists Data created");
  
  fs.writeFile('./Data/artistsData-'+ w + '.json', JSON.stringify(artistsResults), 'utf8', (err) => {
    if (err) throw err;
    console.log("Artists Data File written!", w);
  });

// }

  // let genreResults = [];
  // for (let i = 0; i < 1000000; i++) {
  //   genreResults.push ({
  //     main_Artist_ID: (w-1) * 1000000 + i + 1
  //   });
  // }
  
  // console.log("Genre Data created");
  
  // fs.writeFile('./Data/genreData-'+ w + '.json', JSON.stringify(genreResults), 'utf8', (err) => {
  //   if (err) throw err;
  //   console.log("Genre Data File written!", w);
  // });

// for (var w = 1; w < 11; w++) {
  // let relatedResults = [];
  // for (let i = 0; i < 500000; i++) {
  //   for (let j = 0; j < 10; j++) {
      // let randomId = Math.floor(Math.random () * Math.floor (10000000));
      // while (randomId === i*w) {
      //   randomId = Math.floor(Math.random () * Math.floor (10000000));
      // }
  //     relatedResults.push ({
  //       related_Artist_ID: randomId + 1,
  //       main_Artist_ID: i + 1
  //     });
  //   }
  //   console.log("Related Artist", i);
  // }

  // console.log("Related Artists Data created");

  // fs.writeFile('relatedArtistsData-'+ w + '.json', JSON.stringify(relatedResults), 'utf8', (err) => {
  //   if (err) throw err;
  //   console.log("Related Artists Data File written!");
  // })
    
  

// }
