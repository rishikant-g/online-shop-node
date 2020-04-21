const Product = require('../models/product-model');
exports.getHomePage = (req,res,next) =>{
    Product.fetchAllData()
    .then(([rows,fieldData]) => {
        rows.forEach((key) => {
            console.log(key.title);
        });
    })
    .catch(err => {
        console.log(err);
    });
    res.render('shop/index',{
        path: '/',
        pageTitle: "Home page"
        
    });
}
