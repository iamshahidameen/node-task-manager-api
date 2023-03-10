const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log(req, res);
  res.send('Hello World!');
});

app.listen(5000, () => {
  console.log('app listening on port 5000!');
});
