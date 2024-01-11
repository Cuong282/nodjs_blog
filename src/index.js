// import express from 'express';
// import { engine } from 'express-handlebars';
const path = require('path')
const express = require('express')
const app = express()
var methodOverride = require('method-override')
const handlebars = require('express-handlebars')
const port = 3001

const route =require ('./routes')
const db = require('./config/db')
//Connect to DB

app.use(
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/"))
);
db.connect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,'public')));

app.use(methodOverride('_method'))
//template engine

app.engine('hbs', handlebars.engine({
  extname:'.hbs',
  helpers:{
    sum:(a,b )=> a+b,
  }
}));
app.set('view engine','hbs')
app.set('views', path.join(__dirname, 'resources','views'));
console.log(path.join(__dirname, 'resources/views'))

// Route init
route(app);

app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})

