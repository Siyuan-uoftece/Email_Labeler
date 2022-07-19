const express = require('express');
const request = require('request');
const app = express();
const port = 5000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}.`));

app.get("/random", (req, res) => {
    request("https://random-data-api.com/api/stripe/random_stripe?size=30", function(error, response, body) {
        if (!error && response.statusCode === 200) {
            const json = JSON.parse(body);
            res.send(JSON.stringify(json, null, 4));
        }
    })
})