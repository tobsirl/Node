// Object property shorthand

const name = 'Andrew';
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: 'Philadelphia',
};

console.log(user);

// Object destructuring
const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
};

// const label = product.label

const { label, price, stock, salePrice } = product;

// Computed Property Names old way
// function objectify(key, value) {
//   let obj = {};
//   obj[key] = value;
//   return obj;
// }

// objectify('name', 'Paul'); //?

function objectify(key, value) {
  return {
    [key]: value,
  };
}

objectify('name', 'Paul'); //?

