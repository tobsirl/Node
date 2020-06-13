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
    console.log(data.current);
  } catch (err) {
    console.log(err.message);
  }
};

getCurrentWeather();
