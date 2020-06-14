const fetch = require('node-fetch');

exports.forecast = async () => {
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
