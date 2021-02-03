//not using express just built in node
const http = require('http');

const requestListener = (req, res) => {
    console.log('req', req); //chrome may double hit this because one call for actual load and one for favicon.ico
    res.end('Hello World');
};

const server = http.createServer( requestListener ); //want to pass function reference not result of function, no () for requestListener

server.listen(4242, () => {
    console.log('Server is running ...');
});

//run this, go to http://localhost:4242/ will see Hello World printed on screen