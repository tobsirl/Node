const request = require('request');
require('dotenv').config();

const { getGeocode } = require('./utils/getGeocode');
const { forecast } = require('./utils/forecast');



// getGeocode('Clonmel').catch((err) =>
//   console.log(`Error Message: ${err.message}`)
// );
// getGeocode('New York').catch((err) => console.log(err.message));

console.log(process.argv[2])

getGeocode(process.argv[2])

forecast();