const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const cluster = require('cluster');
const main = cluster.isMaster;
let { threads, delay} = require("./config.json");

if(typeof threads !== "number") threads = Number(threads);
if(typeof delay !== "number") delay = Number(delay);
if(isNaN(threads) || threads === 0){
  console.log("threads should be a number greater than 0, edit config.json")
  return process.exit(1)
}
if(isNaN(delay)){
  console.log("delay should be a number, edit config.json")
  return process.exit(1)
}



if (main) {
  
  for (let i = 0; i < threads; i++) {
    const worker = cluster.fork({id: i + 1});
    worker.on('message', (msg) => {
      console.log(msg)
    })
  }
  cluster.on('exit', (worker, code, sig) => {
    console.error(
      'The Thread with the ' +
      worker.process.pid +
      'exited with the code: ' +
      code
    );
  });


} else {
  console.log(`Worker with the process id: ${process.pid} and id: ${process.env.id} has been started.`);
  setInterval(() => {
    const random = String(Math.random() * 10).replace('.', '');
    const url = 'https://github.com/Rednexie/is.gd?' + random;
    fetch('https://is.gd/create.php?format=simple&url=' + url)
      .then((res) => res.text())
      .then((data) => process.send(data))
      .catch((error) => process.send(error));
  }, delay);
}
