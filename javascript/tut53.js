const http = require('node:http');
const fs = require('node:fs');

const fileContent = fs.readFileSync('l50.html');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end(fileContent);
}   );

server.listen(80, '127.0.0.1', () => {
    console.log('Listening on port 80');
}   );
