//imports
const mongoose = require("mongoose");

//constants
const dbName = "wikiDB";

//db schema 
const articleSchema = new mongoose.Schema({
    name: String,
    content: String,
});

//db model
const Article = mongoose.model("article", articleSchema);

//module exports
module.exports = {
    Article: Article,
    dbName: dbName,
}