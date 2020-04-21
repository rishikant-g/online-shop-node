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

   save(){
       return db.execute('INSERT INTO products (title,price,description,imageurl) VALUES(?, ?, ?, ?)',[
           this.title,
           this.price,
           this.description,
           this.imageUrl
       ]);
   }

   static getSingleProduct(id){
       return db.execute("SELECT * FROM products WHERE id = ?",[id]);
   }

   static deleteProduct(id){
       return db.execute("DELETE FROM products WHERE id = ?",[id]);
   }
}