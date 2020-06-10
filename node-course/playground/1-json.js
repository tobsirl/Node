const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  details: {
    isbn: 'adajsdof',
  },
};

const bookJson = JSON.stringify(book, null, 2);

console.log(book);
console.log(bookJson);
