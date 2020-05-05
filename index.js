const express = require("express");
const server = express();
const expressRouter = require("./router.js");

server.use(express.json());
server.use("/api/posts", expressRouter);
server.get("/", (req, res) => {
  res.status(200).json({ api: "up and running" });
});
server.listen(4000, () => {
  console.log("server is up and running on port:4000");
});
