const express = require('express');

const app = express();

// Configure your Express app
// ...

app.get("/clusterTest", (req, res) => {
    let total = 0;
    for (let i = 0; i < 50000000; i++) {
      total++;
    }
    res.send(`Total: ${total}`);
  });


const server = app.listen(4000, () => {
  console.log('Server is running on port 4000');
});