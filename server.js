'use strict'

const express = require('express')

//Constants
const PORT = 8080;
const HOST = '0.0.0.0';

//App 
const app = express()
app.use('/ToDo', express.static('projects/ToDo'));
app.use('/RPS', express.static('projects/RPS'));
app.use('/PassGen', express.static('projects/Password-Generator'));

app.listen(PORT,HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});