const notes = require('express').Router();

const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
  console.info(`${req.method} request received for notes test`);
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//POST route for a new note
notes.post('/', (req, res) => {
  console.log(req.body);