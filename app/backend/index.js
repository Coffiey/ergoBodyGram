require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
  res.send("Hello World! test");
});

app.post("/send-scan-data", (req, res) => {
  const data = req.body.data;
  const url = `https://platform.bodygram.com/api/orgs/${process.env.ORG_ID}/scans`;
  const headers = {
      'Authorization': process.env.API_KEY,
};
try {

  fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })}
catch(error) {
    console.error('Request failed:', error);
  };
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
