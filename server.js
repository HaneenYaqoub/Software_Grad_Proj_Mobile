var express = require('express');
var app  = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
var con = mysql.createConnection({
 
    host:'localhost',
    port:'3307',
    user:'root',
    password:'', //empty for window
    database: 'letsShopping'

});
app.post('/signup.php',(req,res)=>{
  // const username=req.body.username;
  // const password=req.body.password;
  con.query("INSERT INTO `signup`  (user_name , password) VALUES (?,?)",[username,password ] ,(err,result)=>{
    // if(err){ res.send({err: err}) 
    console.log(err);
  });
});
//   if(res){
//     res.send(result);
//   }
//   else{
//     res.send({message:"wrong user name or password"});
//   }
//   });
// });
var server = app.listen(8081, function(){
  var host = server.address().address
  var port = server.address().port
  console.log("start");

});

con.connect(function(error){
  if(error) console.log(error);
  else console.log("connected");
});

app.get('/signup', function(req, res){
  con.query('select * from signup', function(error, rows, fields){
        if(error) console.log(error);

        else{
            console.log(rows);
            res.send(rows);

        }

  });
});