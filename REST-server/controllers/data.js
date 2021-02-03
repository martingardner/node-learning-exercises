const fs = require('fs');
const FILE_NAME = './data/data.json';

let books = {
    get: (resolve, reject) => {
        fs.readFile(FILE_NAME, (err,data)=> {
            if(err){
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        });
    }
}

module.exports = books;