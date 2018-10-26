var express = require("express");

var app = express();

app.use(express.static("public"));

app.get("/",function(req,res){
	res.render("home.ejs");
	// res.send("<h1>Hi there, welcome to my assignment!</h1><h2>blah blah</h2> ");
})
app.get("/signup",function(req,res){
	res.render("signup.ejs");
})
app.get("/fallinlove/:itemi",function(req,res){
	var thing = req.params.itemi;
	res.render("love.ejs",{thingVar:thing});
})
app.get("/speak/pig",function(req,res){
	res.send("The pig says Oink");
})
app.get("/speak/cow",function(req,res){
	res.send("The cow says Moo");
})
app.get("/speak/dog",function(req,res){
	res.send("The dog says Woof Woof!");
})
app.get("/repeat/:item/:idi",function(req,res){
	var str = "";
	for(var i=0;i<req.params.idi;i++){
		// res.send(req.params.item + " ");
		str+=req.params.item + " ";
	}
	res.send(str);
})



app.get("*",function(req,res){
	res.send("Sorry, page not found.... :(");
})
app.listen(5000,function(){
	console.log("Started server at localhost:5000");
})

