const express = require('express');
const path = require('path');


const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Leja Hedgefund'
  });
});

app.get('/positions/add', (req, res) => {
  res.render('add_position', {
    title: 'Add position'
  })
});

app.listen(3000, () => {
  console.log("Server started on port 3000...");
});
