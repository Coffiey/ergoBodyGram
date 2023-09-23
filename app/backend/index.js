require("dotenv").config({ path: "../.env" });
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const API_KEY = process.env.API_KEY;
const ORG_ID = process.env.ORG_ID;
const tokenController = require("./controller/tokenController")


// app.use("/", express.static(__dirname + "/.." + "/build"));

app.get("/", (req, res) => {
  res.send("Hello World! test");
});

app.get("/api/getToken", tokenController.getOneTimeToken)



app.post("/send-scan-data", (req, res) => {
  const data = req.body.data;
  const url = `https://platform.bodygram.com/api/orgs/${process.env.ORG_ID}/scans`;

  const headers = {
    'Authorization': process.env.API_KEY,
  };

  fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  })
  .then(() => {
    
  })
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
