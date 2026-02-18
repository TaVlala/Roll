const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3002;
const FILE_PATH = path.join(__dirname, 'index.html');

const server = http.createServer((req, res) => {
    fs.readFile(FILE_PATH, (err, data) => {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading prank site');
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log(`Prank server running at http://localhost:${PORT}`);
    console.log(`Bait your friends with this link!`);
});
