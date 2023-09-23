require("dotenv").config({ path: "./.env.local" });
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// app.use("/", express.static(__dirname + "/.." + "/build"));

app.get("/", (req, res) => {
  res.send("Hello World! test");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
