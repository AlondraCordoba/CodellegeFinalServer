/*** MODEL ***/
const dbConfig = require("./db.config");
const mongoose = require("mongoose");


const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;


var heroesSchema = new mongoose.Schema({
    _id: Number,
    nombre: String,
    bio: String,
    img: String,
    aparicion: String,
    casa: String,
    activo: Boolean
});

db.heroes = mongoose.model('heroes', heroesSchema, 'Heroes');

module.exports = db;