const express = require("express");
const bodyParser = require("body-parser");
const https = require("node:https");


run();

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var result = Number(req.body.num1) + Number(req.body.num2);
    res.send("the answer is " + result);
});

app.get("/bmiCalculator",function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
                                   
});

app.post("/bmiCalculator", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight /(height* height);
    res.send("BMI is: " + bmi);
});
app.listen(3000);