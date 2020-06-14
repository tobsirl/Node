const request = require('request');
require('dotenv').config();
const fetch = require('node-fetch');
const { getGeocode } = require('./utils/getGeocode');

const getCurrentWeather = async () => {
  const { ACCESS_KEY } = process.env;
  try {
    const response = await fetch(
      `http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=Clonmel`
    );
    const data = await response.json();
    displayCurrentWeather(data);
  } catch (err) {
    console.log(err.message);
  }
};

const displayCurrentWeather = (weather) => {
  const { temperature, wind_speed } = weather.current;
  const { name, country, region } = weather.location;
  console.log(`Location: ${name}, ${region}, ${country}`);
  console.log(`Temp: ${temperature}`);
  console.log(`Temp: ${wind_speed}`);
};

// getCurrentWeather();

getGeocode('Clonmel').catch((err) =>
  console.log(`Error Message: ${err.message}`)
);
getGeocode('New York').catch((err) => console.log(err.message));
