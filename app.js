const express = require('express');
const jsonfile = require('jsonfile');


const app = express();


jsonfile.writeFileSync('data.p7s', { message: 'Hello from Glitch!' });

// Read data from a file
const data = jsonfile.readFileSync('data.p7s');
console.log(data);


app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
