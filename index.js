// const morgan = require('morgan');
// const cors = require('cors');
// const bodyparser = require('body-parser');
require('./src/database');
const { Config } = require('./src/config');
const { MultiplicationAPI } = require('./src/operations/multiplication');

const express = require('express');
const debug = require('debug')('app:main');

const app = express();

app.use(express.json());

MultiplicationAPI(app);

app.listen(Config.port, () => {
   debug(`Servidor escuchando localhost:${Config.port}`)
});
