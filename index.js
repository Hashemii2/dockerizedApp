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

app.get("/api", (req, res) => {
  res.send(data);
});

//not add mongodb yet.. later i expand this project...

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
