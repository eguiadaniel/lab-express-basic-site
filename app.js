const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('home');
});

app.get('/about', (request, response) => {
  response.send('about');
});

app.get('/works', (request, response) => {
  response.send('works');
});

app.get('/gallery', (request, response) => {
  response.send('gallery');
});

app.listen(3000);
