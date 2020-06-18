const greeter = (name = 'Keith', age = 24) => {
  console.log(`Hello ${name} Age: ${age}`);
};

greeter('Paul');
greeter(null, '25');
