require("dotenv").config({ path: "../.env" });
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const API_KEY = process.env.API_KEY;
const ORG_ID = process.env.ORG_ID;
const tokenController = require("./controller/tokenController")



app.get("/", (req, res) => {
  res.send("Hello World! test");
});

app.get("/api/getToken", tokenController.getOneTimeToken)


app.get("/api/get-measurements/:customId", async (req, res) => {
  const customId = req.params.customId;
  try {
    const url = `https://platform.bodygram.com/api/orgs/${ORG_ID}/scans`;
    console.log(url)
      const headers = {
        'Authorization': API_KEY,
      };
      fetch(url, {
        headers: headers,
        method: `GET`
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
        .then(data => {
          const fullHeight = data.entry.input.photoScan.height;
          const measurementsArray = data.entry.measurements;
          
          const outerArmLength = measurementsArray[21].value
          const kneeHeight = measurementsArray[16].value;
          const backneckHeight = measurementsArray[1].value;
          const shoulderToElbow = Math.round(Math.cos(10 * Math.PI / 180) * measurementsArray[24].value);
          const forearmLength = outerArmLength - shoulderToElbow
          const bodyToElbow = Math.round(Math.sin(10 * Math.PI / 180) * measurementsArray[24].value);
          const endOfKeys = forearmLength + bodyToElbow;
          const insideLegLenght = measurementsArray[13].value;
          const heightB = kneeHeight;
          const heightA = backneckHeight - shoulderToElbow - insideLegLenght + kneeHeight;
          const headHeight = fullHeight - insideLegLenght + kneeHeight;
          const headsize = fullHeight - backneckHeight;
          const heightC = headHeight - headsize * 3 / 10;
          const heightD = fullHeight - headsize - shoulderToElbow;
          const heightE = fullHeight - headsize * 3 / 10;

          console.log(measurementsArray[24].value, measurementsArray[24].name, shoulderToElbow, bodyToElbow);
          res.status(200).send({deskHeightSit: heightA, chairHeightSit: heightB, topOfScreenSit: heightC, deskHeightStand: heightD, topOfScreenStand: heightE, endOfKeyboards: endOfKeys, scan_id: scanId})
        })
      })
  } catch(err) {
    console.log(err)
  }
});

app.post("/send-scan-data", (req, res) => {
  const data = req.body.data;
  const url = `https://platform.bodygram.com/api/orgs/${ORG_ID}/scans`;

  const headers = {
    'Authorization': API_KEY,
  };

  fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  })
  .then(() => {
    
  })
})

app.delete("/api/delete/:scanId", (req, res) => {
  const scanId = req.params.scanId;
  const headers = {
    'Authorization': API_KEY,
  };
  const url = `https://platform.bodygram.com/api/orgs/${ORG_ID}/scans`;

  try {
    fetch(url + "/" + scanId, {
      method: "DELETE",
      headers: headers
    })
    .then(() => res.send("scan correctly deleted"))
  } catch(err) {
    res.send("scan not found")
  }
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
