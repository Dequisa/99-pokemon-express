const express = require("express");
const app = express();

app.get("/bugs", (request, response, next)=>{
    response.send(`  
    <h1>99 little bugs in the code</h1>
    <a href= "/${num}" >pull one down, patch it around</a>
  `);
    
});

const num =0;
app.get("/bugs/:${num}", (request, response)=>{
    console.log(request.params.numberOfBugs)
     num = request.params.numberOfBugs;
    response.send(`  
    <h1> ${num} little bugs in the code</h1>
    const newNum =
    <a href= "/bugs/101 + 2 " >pull one down, patch it around</a>
  `);
});

app.get("/bugs/:id/:id", (request, response)=>{
    response.send("this is the third step of your App")
});

module.exports = app;
