<<<<<<< HEAD
require("dotenv").config({ path: "../.env" });
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const API_KEY = process.env.API_KEY;
const ORG_ID = process.env.ORG_ID;
const tokenController = require("./controller/tokenController")

=======
require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
>>>>>>> 2b098b114db75bdaef12f33bd145e9b67e920d32


app.get("/", (req, res) => {
  res.send("Hello World! test");
});

<<<<<<< HEAD
app.get("/api/getToken", tokenController.getOneTimeToken)



app.post("/send-scan-data", (req, res) => {
  const data = req.body.data;
  const url = `https://platform.bodygram.com/api/orgs/${process.env.ORG_ID}/scans`;

  const headers = {
    'Authorization': process.env.API_KEY,
  };
=======
app.post("/send-scan-data", (req, res) => {
  const data = req.body.data;
  const url = `https://platform.bodygram.com/api/orgs/${process.env.ORG_ID}/scans`;
  const headers = {
      'Authorization': process.env.API_KEY,
};
try {
>>>>>>> 2b098b114db75bdaef12f33bd145e9b67e920d32

  fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  })
<<<<<<< HEAD
  .then(() => {
    
  })
})
=======
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

>>>>>>> 2b098b114db75bdaef12f33bd145e9b67e920d32

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
