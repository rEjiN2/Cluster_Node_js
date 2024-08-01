const cluster = require('cluster');
const os = require('os');
const express = require('express');

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker process ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  const app = express();

  app.get("/clusterTest", (req, res) => {
    let total = 0;
    for (let i = 0; i < 50000000; i++) {
      total++;
    }
    res.send(`Total: ${total}`);
  });

  const server = app.listen(3000, () => {
    console.log(`Worker process ${process.pid} is listening on port 3000`);
  });
}
