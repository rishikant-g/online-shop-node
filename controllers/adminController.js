const Product = require('../models/product-model');
exports.getProduct = (req,res,next) => {
    res.render('admin/add-product',{
        path: '/admin/add-product',
        pageTitle: "Add Product"
    });
}

exports.postProduct = (req,res,next) => {
    const product = new Product(req.body.title,req.body.description,req.body.price,req.body.imageUrl);
    product.save()
    .then(result => {
        res.render('admin/add-product',{
            path: '/admin/add-product',
            pageTitle: 'Add Product'
        });
    })
    .catch(err => {
        console.log(err);
    });
}


exports.getSinglProduct = (req,res,next) => {
    Product.getSingleProduct(req.params.productId)
    .then(product => {
        res.render('admin/prduct-detail',{
            path: '/admin/product-details',
            pageTitle: product[0].title,
            data: product[0]
        });
    })
    .catch(err => {
        console.log(error);
    });
}

exports.deleteProduct = (req,res,next) =>{
    Product.deleteProduct(req.body.productId)
    .then(result => {
        res.redirect('/admin/products');
    })
    .catch(err => {
        console.log(err);
    });
}