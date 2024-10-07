const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.status(200).json({
    name: "chirag",
    age: 23,
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port : http://localhost:${PORT}`);
});

module.exports = app;
