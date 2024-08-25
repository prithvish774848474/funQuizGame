const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "../frontend/src")));
app.get("/", (_, res) => res.send());
app.listen(4000, err => {
    if (err) throw err;
    console.log("Listening to port 4000");
});