const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

let data = [
  {
    id: "1",
    name: "faezeh",
    lastname: "hashemi",
    info: "This info is from node js",
  },
  {
    id: "2",
    name: "ali",
    lastname: "karimi",
    info: "This info is from node js",
  },

  {
    id: "3",
    name: "mona",
    lastname: "hatami",
    info: "This info is from node js",
  },
];

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.get("/", (req, res) => {
  res.send(data);
});

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://mongo:27017/docker-mongo").then(() => {
  app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
  });
});
