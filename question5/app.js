  const fs = require('fs');
  const unzipper = require('unzipper');

  fs.createReadStream('output.zip')
    .pipe(unzipper.Extract({ path: 'extracted/' }))
    .on('finish', () => {
      console.log('Extraction complete!');
    })
    .on('error', (err) => {
      console.error(' Extraction failed:', err);
    });
