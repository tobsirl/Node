require('dotenv').config({ path: '../.env' });
const path = require('path');
const express = require('express');
const hbs = require('hbs');

const { forecast } = require('./utils/forecast');
const { geocode } = require('./utils/geocode');

const app = express();

// Define paths for Express config
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(path.join(__dirname, '../public/')));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
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
    title: 'Help',
    name: 'Paul Tobin',
  });
});

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: `Must provide an address`,
    });
  }

  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      }

      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return res.send({ error });
        }

        res.send({
          forecast: forecastData,
          location,
          address: req.query.address,
        });
      });
    }
  );
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: `Must provide a search term`,
    });
  }

  res.send({
    products: [],
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    errorMessage: 'Help article not found',
    name: 'Paul Tobin',
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    errorMessage: 'Page not found',
    name: 'Paul Tobin',
  });
});

app.listen(3000, () => console.log(`Server running on 3000`));
