const express = require('express');
const path = require('path');
const expressLayout = require('express-ejs-layouts');
const bodyParser = require('body-parser');

//import from routes folder
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

//import from controllers folder
const errConstroller = require('./controllers/404');

//import from util
const mongoConnect = require('./util/database').mongoConnect;

const app = express();

//using public folder
// app.use(express.static('public'));
app.use('/public', express.static(path.join(__dirname, 'public')));

//using bodyparser
app.use(bodyParser.urlencoded({ extended: false }));

//config for express-ejs-layouts
app.use(expressLayout);
app.set('view engine', 'ejs');

app.use('/admin', adminRoute);
app.use(shopRoute);

//Error
app.use(errConstroller.getErrors);

mongoConnect(() => {
    app.listen(3000);
});