let express = require('express');
console.log('hello world')
let app = express();
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});



































 module.exports = app;
