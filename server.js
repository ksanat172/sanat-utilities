var express = require('express');
var cors = require('cors');
var mysql = require('mysql');
var app = express();
var port = process.env.port || 8000;
  var con = mysql.createConnection({
    host: 'sql12.freesqldatabase.com',
    port:  3306,
    user: 'sql12392862',
    password: 'sanat172@kumar',
    database: 'sql12392862'
});

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

app.get('/getUsers', (req, res) => {
  res.header('content-type', 'application/json');
  con.query("SELECT Name FROM ReactTable", (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});

app.post("/addUser", (req, res) => {
    console.log("CONTENT:", req.body);
    res.header('content-type', 'text/javascript');
    const name = req.body.user;
        con.query("INSERT INTO ReactTable(Name) VALUES ('"+name+"')",(err,result,fields)=>{
            if(err) throw err;
      res.send("Data created successfully");
        })
  });

  app.delete("/removeUser", (req, res) => {
    console.log("CONTENT:", req.body);
    res.header('content-type', 'text/javascript');
    const name = req.body.user;
        con.query("DELETE FROM ReactTable WHERE Name = '"+name+"'",(err,result,fields)=>{
            if(err) throw err;

        console.log(result);
      res.send("Data deleted successfully:"+result);
        })
  });
  

var server = app.listen(port,()=>{
    console.log("Server:",server.address());
});
