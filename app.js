const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const noteRouter = require("./router/note.router");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.send("every thing is fine");
});

app.use("/api/v1/", noteRouter);

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server listen on ${PORT}`);
});
