let express = require("express");
let server = express();
let path = require("path");

server.set("port", 80);
server.use(express.static(path.join(__dirname, "vite-basic-app/dist")));

server.get("/", function (req, res) {
  res.type("text/html");
  //res.sendFile(path.join(__dirname, "index.html"));
  res.sendFile(path.join(__dirname, "./vite-basic-app/dist/index.html"));
});
/*
server.listen(server.get("port"), function () {
  console.log("Server Started");
});*/

server.get("/json", function (req, res) {
  res.type("application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.sendFile(path.join(__dirname, "student.json"));
});

server.listen(server.get("port"), function () {
  console.log("Server Started");
});
