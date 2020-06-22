// const doWorkPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
// resolve([7, 4, 1]);
//     reject(`Things went wrong!`);
//   }, 2000);
// });

// doWorkPromise
//   .then((result) => {
//     console.log('Success', result);
//   })
//   .catch((error) => {
//     console.log(`Error:`, error);
//   });

//                                fulfilled
//                              /
// Promise      -- pending -->
//                              \
//                                rejected

// nested for each call made
const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

add(1, 2)
  .then((sum) => {
    console.log(sum);

    add(sum, 5)
      .then((sum2) => {
        console.log(sum2);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });
