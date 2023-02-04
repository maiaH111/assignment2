/*********************************************************************************
*  WEB322 – Assignment 02
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part *  of this assignment has been copied manually or electronically from any other source 
*  (including 3rd party web sites) or distributed to other students.
* 
*  Name: Maia Hakimi Student ID: 187568217 Date: Feb 3 2023
*
*  Online (Cyclic) Link: 
*
********************************************************************************/ 
var express = require("express");
var app = express();
app.use(express.static('public')); 
const pathway = require('path');
const fs = require('fs');
var blog_service = require("./blog-service.js");


var HTTP_PORT = process.env.PORT || 8080;

app.get("/about", (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}
app.get("/", function(req,res){
    res.send("Web 322 Assignment 2<br /><a href='/about'>Go to the about page</a>");
});


app.get("/about", function(req,res){
    res.send("<h3>About</h3>");
});

app.get('/posts', (req, res) => {
    fs.readFile(path.join(__dirname, 'data', 'posts.json'), 'utf-8', (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(JSON.parse(data));
      }
    });
  });
  
  
  app.get('/categories', (req, res) => {
    fs.readFile(path.join(__dirname, 'data', 'categories.json'), 'utf-8', (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(JSON.parse(data));
      }
    });
  });

  app.use((req, res) => {
    res.status(404).send('Page Not Found');
  });
app.get("/blog", (req, res) => {
    res.json(blogService.getPublishedPosts());
  });
  
app.listen(HTTP_PORT, onHttpStart);