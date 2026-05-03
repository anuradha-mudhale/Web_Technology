const express = require('express');
const app = express();

// set ejs as view engine
app.set('view engine', 'ejs');

// route
app.get('/', (req, res) => {
  res.render('index', { name: "Hello using EJS" });
});

// server start
app.listen(3000, () => {
  console.log("Server running on port 3000");
});