const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const cluster = require('cluster');
const main = cluster.isMaster;
const cores = Math.round(require("os").cpus().length / 2);

if (main) {
  for (let i = 0; i < cores; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, sig) => {
    console.log(
      'The Thread with the ' +
      worker.process.pid +
      'exited with the code: ' +
      code
    );
  });
} else {
  console.log(process.pid);
  setInterval(() => {
    const random = String(Math.random() * 10).replace('.', '');
    const url = 'https://github.com/Rednexie/is.gd?' + random;
    fetch('https://is.gd/create.php?format=simple&url=' + url)
      .then((res) => res.text())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, 1);
}
