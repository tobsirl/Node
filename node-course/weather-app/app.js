const request = require('request');
require('dotenv').config();
const fetch = require('node-fetch');

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

const getLatLong = async () => {
  const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidG9ic2lybCIsImEiOiJjano4Mno2MjIxMWNkM25vNmpsbXlqbmZrIn0.QABta77PgnY0xTlVDR9kgg&limit=1`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    const latitude = data.features[0].center[1];
    const longitude = data.features[0].center[0];
    console.log(`Latitude: ${latitude} Longitude: ${longitude}`);
  } catch (err) {
    console.log(err.message);
  }
};

getLatLong();
