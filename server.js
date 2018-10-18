var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var http = require('http').Server(app);
var server = http.listen(port, () => {
    console.log("Listening on port " + port);
});

app.get('/', (req, res) => {});