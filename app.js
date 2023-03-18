const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const bodyparser = require("body-parser");
const dbModel = require("./dbModel"); //import db model
const { response } = require("express");

//create express app
const app = express();

//prerequisites
app.set('view engine', 'ejs'); //to use ejs templates
app.use(bodyparser.urlencoded({ extended: true }));//use bodyparser
app.use(express.static("public"));//serve public folder

//test db connection
const URI = "mongodb://127.0.0.1:27017/"; // local mongoDB uri
async function testDb() {
    //connect to db, create db if doesnt exist
    try {
        await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, dbName: dbModel.dbName });
        console.log("Connection to mongodb local host successful.");
        //close connection after test
        // mongoose.connection.close();
    } catch (err) {
        console.log(err);
    }
}
testDb();

////////////////////////handle calls to all articles/////////////////////////////
app.route("/articles")
    //handle get requests for all articles
    .get(async (req, res) => {
        try {
            const foundArticles = await dbModel.Article.find({}); //returns all articles in the collection
            //send to client
            res.send(foundArticles);
        } catch (err) {
            //send error to client if found
            res.send(err);
        }
    })
    //handle post request to add a single article
    .post(async (req, res) => {
        //create new document object from request object body
        const newArticle = new dbModel.Article({
            name: req.body.name,
            content: req.body.content
        });
        //write the document to database and return response to client
        try {
            await newArticle.save();
            console.log("writing to db succesful, article added");
            res.send("successfully  added article to the database");
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    })
    //handle delete request to delete all articles
    .delete(async (req, res) => {
        //delete all articles
        try {
            await dbModel.Article.deleteMany({});
            console.log("Deleted all articles successfully.");
            res.send("Deleted all articles successfully.");
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    });

////////////////////////handle calls to specific article/////////////////////////////
app.route("/articles/:articleName")
    //get a specific article
    .get(async (req, res) => {
        const articleName = req.params.articleName;
        //find article by name
        try {
            const foundArticle = await dbModel.Article.findOne(
                { name: articleName }
            );
            //check if article was found then send 
            if (foundArticle) {
                res.send(foundArticle);
            } else {
                res.send("No article with that name was found");
            }
        }
        catch (err) {
            console.log(err);
            res.send(err);
        }
    })
    //update a specific article
    .put(async (req, res) => {
        //find article in url params and replace fields (retains same _id)
        try {
            await dbModel.Article.replaceOne(
                { name: req.params.articleName },
                { name: req.body.name, content: req.body.content }
            );
            console.log("Updated article successfully.");
            res.send("Updated article successfully.");
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    })
    //update the field of a specific title
    .patch(async (req, res) => {
        try {
            const response = await dbModel.Article.updateOne(
                { name: req.params.articleName },
                { $set: req.body }//if one of the fields is not specified in the request, the json object sent doesnt include it
            );
            //tapping into the matchedCount property of the response
            if (response.matchedCount > 0) {
                res.send("updated document successfully");
            } else {
                res.send("no document found matching that name");
            }
        } catch (err) {
            console.log(err)
            res.send(err)
        }
    })
    //delete a document from the collection matching the name in the url parameter
    .delete(async (req, res) => {
        try {
            await dbModel.Article.deleteOne(
                { name: req.params.articleName }
            );
            res.send("deleted article successfully.")
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    });

//listen on port 3000
app.listen(3000, function () {
    console.log("server listening on port 3000");
})