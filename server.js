require("dotenv").config();
require('./server/db-conn');

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const {PORT} = process.env;

app.use(express.static('./client/rtc-dash-ui/build'));

app.use('/api/thoughts', require('./server/routes/thoughts-route'));

app.get('/', (req, res) =>{
    res.sendFile('index.html', {root: __dirname});
});

app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/client/rtc-dash-ui/build/'})
});

app.listen(PORT, () => console.log(`Wizardry happening on port ${PORT}`));

