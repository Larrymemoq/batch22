import express from 'express';
import parser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';


const app = express();
const PORT = process.env.PORT || 3000
const mongoURI = process.env.MONGODB_URI || "mongodb://larrymemo:Calle13num1@ds113692.mlab.com:13692/sindelantal"

mongoose.connect(mongoURI,{ useNewUrlParser: true});
const db = mongoose.connection;
db.on('err',() => console.log("error en db"))
  .once('open',() => console.log("conectado a db"))
app.use(parser.json());
app.use(cors())

app.get('/',(req,res)=>{
  res.send('server run')
});

app.listen(3000,()=>console.log("server on 3000"));
