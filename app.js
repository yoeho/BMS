const express = require('express');
const expressLayout = require('express-ejs-layouts');
const bodyParser = require('body-parser');

//import from routes folder
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

//import from controllers folder
const errConstroller = require('./controllers/404');

const app = express();

//using public folder
app.use(express.static('public'))

//using bodyparser
app.use(bodyParser.urlencoded({ extended: false }));

//config for express-ejs-layouts
app.use(expressLayout);
app.set('view engine', 'ejs');

app.use('/admin', adminRoute);
app.use(shopRoute);

//Error
app.use(errConstroller.getErrors);

app.listen(777, (err) => {
    if (!err) {
        console.log("Server running at port 777!!");
    }
});