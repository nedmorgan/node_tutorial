// function sayHello(name) {
//   console.log(`Hello ${name}!`)
// }

// sayHello('Walter');

// const log = require('./logger.js');

// log('Walter');

// //Checking the path of the file
// const path = require('path');

// var pathObj = path.parse(__filename);

// console.log(pathObj);

// //Check the memory on the system
// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

// fs.readdir('./', function (err, files) {
//   if(err) console.log('Error', err);
//   else console.log('Result', files);
// });

// const EventEmitter = require('events');

// const Logger = require('./logger.js');
// const logger = new Logger();

// //Register a listener
// logger.on('messageLogged', (arg) => {
//   console.log('Listener called', arg);
// });

// logger.log('Hi, Walter');

const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.write('Hello World');
    res.end();
  }

  if (req.url === '/api/courses') {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.on('connection', (socket) => {
  console.log("New Connection");
})
server.listen(3000);

console.log('Listening on port 3000...');