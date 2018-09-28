var download = require('image-downloader')
var coolImages = require('cool-images')
 
// Download to a directory and save with the original filename

var images = coolImages.many(400, 400, 1000);

for (var i = 0; i < 1000; i++) {
  var options = {
    url: images[i],
    dest: './images/' + i + '.jpg'                  // Save to /path/to/dest/image.jpg
  }
   
  download.image(options)
    .then(({ filename, image }) => {
      console.log('File saved to', filename)
    })
    .catch((err) => {
      console.error(err)
    })
}

// Then use automator for renaming to keep indexes