// import express from 'express';
// import { engine } from 'express-handlebars';
const path = require('path')
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const port = 3000

app.use(express.static(path.join(__dirname,'public')));

//template engine
app.engine('hbs', handlebars.engine({
  extname:'.hbs'
}));
app.set('view engine','hbs')
app.set('views', path.join(__dirname, 'resources/views'));
console.log(path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
  res.render('home')
})
app.get('/news', (req, res) => {
  res.render('news')
})
app.get('/search', (req, res) => {
  res.render('search')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
