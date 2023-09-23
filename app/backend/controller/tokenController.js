const axios = require('axios');
require("dotenv").config({ path: "../.env" });


const getOneTimeToken = async (req, res) => {
    const API_KEY = process.env.API_KEY;
    const ORG_ID = process.env.ORG_ID;
    const fetchUrl = `https://platform.bodygram.com/api/orgs/${ORG_ID}/scan-tokens`;
    const body = {
        "scope": [
            "api.platform.bodygram.com/scans:create",
        ]
    };
    const headers = {
        'Content-Type': 'application/json', 
        'Authorization': `${API_KEY}`,

      };
      try {
          const results = await axios.post(fetchUrl, body, {headers});
          const URL = `https://platform.bodygram.com/en/${ORG_ID}/scan?token=${results.data.token}&system=metric`
     console.log(results.data);
        res.status(200).json(URL);
    } catch (err) {
        res.status(500).json("something went wrong");
    }
}

module.exports = { getOneTimeToken }