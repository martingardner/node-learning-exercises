# node-learning-exercises

## General

- important base node libraries to import
- - `require('fs')` file system based functions like readFile
- - `require('util')` utility system based functionality like promisify for being able to use async/await
    example:

const readFile = util.promisify(fs.readFile);
async function main() {
const data = await readFile(\_\_filename);
console.log('File data is', data);
}

- - `require('events')` for pub/sub event emitting, see example in REPL-test

## REPL-test

- practice with REPL try out some base module.exports / require commands
- issue I had from other day with REPL would guess had to do with the folder name that it was throwing up on.
