var fs = require('fs');

fs.writeFile('./Public/file1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Write file!');
}); 

fs.appendFile('./Public/file2.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Appended!!');
}); 

fs.readFile('./Public/file3.txt', 'utf-8',   function (err,data) {
  if (err) throw err;
  console.log("File read="+data);
});

fs.rename('./Public/file1.txt', './Public/f1.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});

fs.unlink('./Public/file.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});