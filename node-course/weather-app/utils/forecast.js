const fetch = require('node-fetch');

exports.forecast = async (lat, long) => {
  const { ACCESS_KEY } = process.env;
  try {
    const response = await fetch(
      `http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${lat},${long}`
    );
    const data = await response.json();
    displayCurrentWeather(data);
  } catch (err) {
    console.log(err.message);
  }
};

const displayCurrentWeather = (weather) => {
  const { temperature, wind_speed, observation_time } = weather.current;
  const { name, country, region } = weather.location;
  console.log(`Location: ${name}, ${region}, ${country}`);
  console.log(`Temp: ${temperature}`);
  console.log(`Wind Speed: ${wind_speed}`);
  console.log(observation_time);
};
