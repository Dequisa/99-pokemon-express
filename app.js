const express = require("express");
const app = express();

app.get("/bugs", (request, response, next)=>{
    response.send(`  
    <h1>99 little bugs in the code</h1>
    <a href= "/bugs/101" >pull one down, patch it around</a>
  `);
    
});

const num =0;
app.get("/bugs/:num", (request, response)=>{
    console.log(request.params.num)
    if(request.params.num > 200){
        response.send(`  
        <h1>  ${request.params.num} little bugs in the code</h1>
        <a href= "/bugs " >Your code crashed</a>
      `);
        
    }else
    response.send(`  
    <h1>  ${request.params.num} little bugs in the code</h1>
    <a href= "/bugs/${parseInt(request.params.num)+1} " >pull one down, patch it around</a>
  `);

});

app.get("/bugs/:id/:id", (request, response)=>{
    response.send("this is the third step of your App")
});

module.exports = app;
