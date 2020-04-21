const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');
const db = require('./util/database');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');
app.set('views','views');

// db.execute("SELECT * FROM products")
// .then(result =>{
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// });

app.use('/admin',adminRoutes);
app.use(shopRoutes);


app.use(errorController.get404);
app.listen(3000);