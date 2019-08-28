const express = require('express');
const bodyParser = require('body-parser');
const adapter = require('./index');

const app = express();
app.use(bodyParser.json());

app.post('/', function (req, res) {
    adapter.gcpservice(req, res)
});

let listener = app.listen(process.env.PORT, function () {
    console.log("EasyPost adapter listening on", listener.address().address + listener.address().port);
});
