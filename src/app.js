const express = require('express');
const app = express();
const mathOperations = require('./calculator');
const input = 4;
const input2 = 2;
console.log(mathOperations.add(input, input2), mathOperations.subtract(input, input2));
app.listen(3000, function() {
  console.log('server is running');
});
