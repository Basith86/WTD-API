require('./config/config');

require('./models/db');

const rtsIndex = require('./routes/index.routes');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var app = express();


app.use(bodyParser.json());
app.use(cors());
app.use('/api',rtsIndex);

app.listen(process.env.PORT, () => {
    console.log(`port: ${process.env.PORT}`);
})