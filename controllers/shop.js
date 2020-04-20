
exports.getHomePage = (req,res,next) =>{
    res.render('shop/index',{
        path: '/',
        pageTitle: "Home page"
        
    });
}
