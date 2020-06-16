const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '../public/')));

app.get('/help', (req, res) => {
  res.status(200).send('help page');
});

app.get('/about', (req, res) => {
  res.status(200).send(`<h1>About</h1>`);
});

app.get('/weather', (req, res) => {
  res.status(200).send({
    location: 'Ireland',
    forecst: 'Raining',
  });
});

app.listen(3000, () => console.log(`Server running on 3000`));
