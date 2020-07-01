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

  const SQL = 'SELECT * FROM tasks;';
  client.query(SQL)
    .then(results => {
      console.log(results);
      response.status(200).json(results.rows);
    })
    .catch(response.status(500).send('Something went wrong fetching from database'));


  // let thingsToDo = [
  //   { task: 'watch tv' },
  //   { task: 'walk rosie' },
  //   { task: 'practice for lecture' },
  //   { task: 'cooking' },
  //   { task: 'eat cookies' },
  //   { task: 'take a nap' },
  // ];

  // response.status(200).json(thingsToDo);
}

// Go!
function startServer() {
  app.listen(PORT, () => console.log('Server is running on PORT:', PORT));
}

startServer(); 
