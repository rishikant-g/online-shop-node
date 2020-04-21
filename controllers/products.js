const Product = require('../models/product-model');

exports.fetchAllData = (req,res,next) => {
    Product.fetchAllData()
    .then(([rows,proudctData]) => {
        res.render('admin/products',{
            path: '/admin',
            products: rows,
            pageTitle: "Admin Home Page"
        });
    })
    .catch(err => {
        console.log(err);
    });
}