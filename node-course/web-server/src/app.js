const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '../public/')));

app.get('/weather', (req, res) => {
  res.status(200).send({
    location: 'Ireland',
    forecst: 'Raining',
  });
});

app.listen(3000, () => console.log(`Server running on 3000`));
