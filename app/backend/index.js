require("dotenv").config({ path: "../.env" });
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const API_KEY = process.env.API_KEY;
const ORG_ID = process.env.ORG_ID;
const tokenController = require("./controller/tokenController")



app.get("/", (req, res) => {
  res.send("Hello World! test");S
});

app.get("/api/getToken", tokenController.getOneTimeToken)


app.get("/api/get-measurements/:customId", async (req, res) => {
  const customId = req.params.customId;
  try {
    const url = `https://platform.bodygram.com/api/orgs/${process.env.ORG_ID}/scans`;
      const headers = {
        'Authorization': process.env.API_KEY,
      };
      fetch(url, {
        headers: headers
      })
      .then(data => data.json())
      .then(result => {
      const filteredResult = result.results.filter(scan => scan.customScanId === customId);
      return filteredResult[0].id;
      })
      .then(scanId => {
        fetch(url+"/"+scanId, {
          headers: headers
        })
        .then(data =>data.json())
        .then(data => res.status(200).send(data.entry.measurements))
      })
  } catch(err) {
    console.log(err)
  }
});

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
