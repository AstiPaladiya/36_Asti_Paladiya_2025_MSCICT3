const fs=require('fs');
const {promisify}=require('util');
const unlinkAsync=promisify(fs.unlink);

async function deleteFile(filepath) {
    try {
        await unlinkAsync(filepath);
        console.log("File deleted!");
    } catch (error) {
        console.log("Error:",error);
    }
}

deleteFile("temp.txt");