const db = require('../util/database');

module.exports = class Product{
    constructor(title,description,price,imageUrl){
        this.title = title;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }

   static fetchAllData(){
    return db.execute("SELECT * FROM products");
   }
}