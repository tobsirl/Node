const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send(`Welcome from the server`);
});

app.get('/help', (req, res) => {
  res.status(200).send('help page');
});

app.get('/about', (req, res) => {
  res.status(200).send(`About page`)
})

app.get('/weather', (req, res) => {
  res.status(200).json({
    location: 'Ireland',
    rain: 'Lots of rain',
  });
});

app.listen(3000, () => console.log(`Server running on 3000`));
