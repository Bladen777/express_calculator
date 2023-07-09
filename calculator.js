const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));


// index.html //
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html"); 
});
    
app.post("/", function(req, res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;
    res.send("The result of the calculation is " + result);
});



app.listen(port, function(){
    console.log(`Starting calculator on port ${port}`);
});

//bmi_calculator.html // 
app.get ("/bmi_calculator",function(req,res){
    res.sendFile(__dirname + "/bmi_calculator.html")

});

app.post("/bmi_calculator", function(req,res){

    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

// bmi = weight / height^2 //

    var result = Math.floor(weight/ Math.pow(height,2));
    res.send("your BMI is " + result);
});