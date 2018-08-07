import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CuponSchema = new Schema({
  "Cupon".{
    type: String,
    required: true
  }
  "descuento":{
    type: Number,
    required: true
  },
  "descripcion":{
    type: String,
    required: true
  }
},{collection:"Cupon", timestamp: true});

export default mongoose.model("Cupon", CuponSchema)
