var http = require('http');
var htmlSnippet = require('./helloWorldhtml');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(htmlSnippet.htmlSnippet());
    res.end();
}).listen(8000);