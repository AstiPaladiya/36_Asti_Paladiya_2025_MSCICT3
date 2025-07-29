const fs=require('fs');
const archiver=require('archiver');


const output=fs.createWriteStream('output.zip');
const archive=archiver('zip');

output.on('close',() =>{
    console.log('ZIP file created successfully: ${output.zip} (${archive.pointer()} total bytes)');
});

archive.pipe(output);
archive.directory("Public/",false);
archive.finalize();