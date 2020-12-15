const { static } = require('express');
const express = require('express');
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.locals.pageTitle = 'Random Locals pageTitle';

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.render('home', {
    message: 'hello world object',
    pageTitle: 'home'
  });
});

/*
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (request, response, next) => {
  response.sendFile(__dirname + '/views/works.html');
});

app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/gallery.html');
});

app.get('*', (request, response, next) => {
  response.sendFile(__dirname + '/views/home.html');
});*/

app.listen(3000);
