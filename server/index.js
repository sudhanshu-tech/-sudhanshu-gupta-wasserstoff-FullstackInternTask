const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//------------db connection---------
main().catch(err=>console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/wasserstoff');
    console.log('db Connected');
}

//.......creating Scheema...........
const userSchema = new mongoose.Schema({
  end_year: String,
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: String,
  impact: String,
  added: String,
  published: String,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number
});

//------creating model------
const User = mongoose.model('data',userSchema)

const app = express();//middleware
app.use(cors());//middleware
app.use(bodyParser.json());//middleware

// app.post('/demo',async(req,resp)=>{

//     let user = new User();
//     user.username = req.body.username;
//     user.password = req.body.password;
//     const doc = await user.save();

//     console.log(doc);
//     resp.send(doc);
    
    
// })

app.get('/hello',async (req,resp)=>{
    const filters = req.query;
    const docs = await User.find(filters);
    console.log(docs)
    resp.json(docs);
})
app.listen(5002,()=>{
    console.log("server started");
})
