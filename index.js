const express = require("express");

const teachersRouter = require("./routes/teachers");

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello, this is homepage");
});

app.use("/teachers", teachersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
