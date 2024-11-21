// Laad de Express module
const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');


const app = express();
const PORT = 3000;

// Configure Body-parser to handle json and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const db = new sqlite3.Database('./database.db');

// Stel 'public' in als de statische map
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/snippet', (req, res) => {
  res.json({"msg": "Hello world"})
});


app.post('/snippet', (req, res) => {
  res.json({"msg": "Hello world"})
});


app.put('/snippet', (req, res) => {
  res.json({"msg": "Hello world"})
});


app.delete('/snippet', (req, res) => {
  res.json({"msg": "Hello world"})
});



// Start de server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
