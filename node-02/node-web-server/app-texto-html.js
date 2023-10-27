const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=UTF-8",
  });
  res.end("<h1>Hola Node</h1><p>Un Párrafo...</p>");
});

server.listen(3000, () => console.log(`http://localhost:3000`));
