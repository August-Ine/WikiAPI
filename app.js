const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const bodyparser = require("body-parser");

//create express app
const app = express();
//prerequisites
app.set('view engine', 'ejs'); //to use ejs templates
app.use(bodyparser.urlencoded({ extended: true }));//use bodyparser
app.use(express.static("public"));//serve public folder