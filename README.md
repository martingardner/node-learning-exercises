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

## Possible Addons

- npm package `nodemon` for live updating, so don't need to kill server and restart it on changes.
- npm package `express` if the server is going beyond very basic make it run, probably just use express to handle a lot of heavy lifting.

## REPL-test

- practice with REPL try out some base module.exports / require commands
- issue I had from other day with REPL would guess had to do with the folder name that it was throwing up on.

## REST-server

- practice based off of pluralsight class
- node / nodemon / express
- stopped this class part way because a lot of the js structures he uses are bad, and callback hell, no separation of concerns.

## ARRAY-REST-server

- my version of a basic server
- array of objects to Read/Find
- node / nodemon / express
