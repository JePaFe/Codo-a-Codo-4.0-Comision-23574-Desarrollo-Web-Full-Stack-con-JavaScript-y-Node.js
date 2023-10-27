const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(__dirname);
  const html = fs.readFileSync(__dirname + "/index.html");
  res.writeHead(200, {
    "Content-Type": "text/html; charset=UTF-8",
  });
  res.end(html);
});

server.listen(3000, () => console.log(`http://localhost:3000`));
