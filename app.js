const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
// eslint-disable-next-line new-cap
const chance = require('chance').Chance();

setInterval(() => {
  socket.emit('log', chance.animal());
}, 1000);