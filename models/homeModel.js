const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtils");
const {getDB} = require("../utils/dbConfig");

module.exports = class HomeModel {
  constructor(title, price, imgUrl, category) {
    this.title = title;
    this.price = price;
    this.imgUrl = imgUrl;
    this.category = category;
    this.datenew = new Date();
    this.status = 1;
  }


  saveMongoDb() {
    const db = getDB();
     return db.collection("products").insertOne(this);
  }
  static getFatchFromDb(){
    const db = getDB();
    return db.collection("products").find().toArray();
  }
  static getMovieList(){
    const db = getDB();
    return db.collection("movies").find().limit(20).toArray();
  }
  save() {
    HomeModel.getFatch((registeredHomes) => {
      registeredHomes.push(this);
      const homeDataPath = path.join(rootDir, "database", "product.json");
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("File Writing Concluded", error);
      });
    });
  }
  static getFatch(callback) {
    const homeDataPath = path.join(rootDir, "database", "product.json");
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
};