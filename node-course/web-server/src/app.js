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

app.get('/weather', (req, res) => {
  res.status(200).send({
    location: 'Ireland',
    forecst: 'Raining',
  });
});

app.listen(3000, () => console.log(`Server running on 3000`));
