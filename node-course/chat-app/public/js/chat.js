const socket = io();

socket.on('message', (message) => {
  console.log(message);
});

// socket.on('countUpdated', (count) => {
//   console.log(`The count has been updated!`, count);
// });

// document.getElementById('increment').addEventListener('click', () => {
//   // console.log(`Clicked`);
//   socket.emit('increment');
// });

// document.getElementById('toggleColor').addEventListener('click', () => {
//   socket.emit('toggleColor')
// })
