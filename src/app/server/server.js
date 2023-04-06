const express= require('express');
const bodyParser=require('body-parser');
const cors= require('cors');

const PORT =3000;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/',function(req,res){
    res.send("hello from node server")
})

app.listen(PORT,function(){
    console.log("Server running on port "+PORT);
});

app.post('/enroll',function(req,res){
    console.log(req.body);
    //calling mongo db
    res.status(200).send({"data":"Recived successfully"});
})