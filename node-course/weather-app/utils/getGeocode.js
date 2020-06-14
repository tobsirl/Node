const fetch = require('node-fetch');

exports.getGeocode = async (address) => {
  const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${process.env.MAPBOX_KEY}&limit=1`;
 
  const response = await fetch(URL);
  const data = await response.json();
  const latitude = data.features[0].center[1];
  const longitude = data.features[0].center[0];
  console.log(data.features[0].place_name)
  console.log(`Latitude: ${latitude} Longitude: ${longitude}`);
};
