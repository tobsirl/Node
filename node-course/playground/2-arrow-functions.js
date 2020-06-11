// const square = function (x) {
//   return x * x;
// };

// const square = (x) => {
//   return x * x;
// };

// const square = (x) => x * x;

const event = {
  name: 'Birthday Party',
  guestList: ['Paul', 'Keith', 'Simon'],
  printGuistList() {
    console.log('Guest list for ' + this.name);
    this.guestList.forEach((guest) =>
      console.log(`${guest} is attended the ${this.name}`)
    );
  },
};

event.printGuistList();
