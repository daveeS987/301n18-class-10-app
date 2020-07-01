'use strict';

// Dependencies
const express = require('express');
const cors = require('cors');
const superagent = require('superagent');
const pg = require('pg');
require('dotenv').config;

// Initialize the App
const app = express();
app.use(cors());
const client = new pg.Client(process.env.DATABASE_URL);

// Global Variables
const PORT = process.env.PORT || 3000;

// Route Definitions
app.get('/todo', handleToDo);

// Route Handlers
function handleToDo(request, response) {
  let SQL = 'SELECT * FROM tasks;';
  client.query(SQL)
    .then(results => {
      console.log('results: ', results);
      response.status(200).json(results.rows);
    })
    .catch(response.status(500).send('Something went wrong fetching from database'));
}

// Go!
function startServer() {
  app.listen(PORT, () => console.log('Server is running on PORT:', PORT));
}

client.connect()
  .then(() => {
    startServer();
  });


