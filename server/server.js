require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const router = require('./routes/video.route');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

const port = process.env.API_PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());
app.use(cookieParser());

app.get('/api/favicon.ico', (req, res) => res.status(204));

app.use('/api', router);

app.use(express.static(path.join(__dirname, 'build')));

// catch 404
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Api is working</h2>');
});

// start the app
app.listen(port, () => {
  console.log(`App Server Listening at ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
