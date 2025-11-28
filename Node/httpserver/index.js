let http = require("http"); //자바의 임포트와 비슷함
let server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write("<html>");
  res.write("<body><h3>Hello World - 안녕</h3></body>");
  res.write("</html>");
  res.end();
});

server.listen(80, "localhost");
console.log("Server is running");
