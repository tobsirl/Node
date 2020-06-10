const fs = require('fs');

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   details: {
//     isbn: 'adajsdof',
//   },
// };

// const bookJson = JSON.stringify(book, null, 2);

// fs.writeFileSync('1-json.json', bookJson);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

// console.log(data);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = 'Paul';
data.age = 40;

console.log(data);

const userJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json', userJSON);
