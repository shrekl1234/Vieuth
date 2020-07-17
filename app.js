require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');
const PROCESS = {
  PROCESS1: "C:\Program Files\P1\.env",
  PROCESS2: "C:\Program Files\P2\.env"
};
app.get("/getEnvironment/:process", function(req, res) {
  const process = req.params.process;
  Object.keys(PROCESS).forEach(function(i) {
    if (i === process) {
      require('dotenv').config({
        path: PROCESS.i
      });
      res.send(process.env);
    }
  });
});

app.get("setEnvironment/:process/:key/:value",function(req,res){
   const process = req.params.process;
   const key = req.params.key;
   const value = req.params.value;

   Object.keys(PROCESS).forEach(function(i) {
     if (i === key) {
       require('dotenv').config({
         path: PROCESS.i
       });
        PROCESS.key = value;
        res.send(req.process.key);
     }
   });

});


app.listen(3000, function(req, res) {
  console.log("Server Started at Port 3000");
});
