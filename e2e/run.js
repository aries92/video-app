/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const cypress = require('cypress');
const express = require('express');

const dist = path.join(__dirname, '../build');
const app = express();

app.use(express.static(dist));
app.get('*', (req, res) => {
  res.sendfile(path.join(dist, 'index.html'));
});

const server = app.listen(3000, 'localhost', () => {
  console.log('Starting server on http://localhost:3000');

  cypress
    .run({
      project: __dirname,
    })
    .then(({ totalFailed }) => {
      console.log('Stopping server');
      server.close();

      if (totalFailed) {
        console.error(`${totalFailed} tests failed`);
        process.exit(1);
      }
    })
    .catch(error => {
      console.error('Failed to run Cypress');
      console.error(error);
      process.exit(1);
    });
});
