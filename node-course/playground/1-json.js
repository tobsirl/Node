const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  details: {
    isbn: 'adajsdof',
  },
};

const bookJson = JSON.stringify(book, null, 2);

console.log(bookJson);

const parsedData = JSON.parse(bookJson);

console.log(parsedData.author);
