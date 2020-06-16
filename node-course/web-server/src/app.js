const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '../public/')));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Paul Tobin',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Paul Tobin',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    message: 'This is a message on the help page',
  });
});

app.get('/weather', (req, res) => {
  res.status(200).send({
    location: 'Ireland',
    forecst: 'Raining',
  });
});

app.listen(3000, () => console.log(`Server running on 3000`));
