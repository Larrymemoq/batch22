import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ProductoSchema = new Schema({
  "nombre":{
    type: String,
    required: true
  },
  "precio"{
    type: Number,
    required: true
  },
  "foto"[],
  "descripcion":{
    tipe: String,
    required: true
  },
  "tipo":{
    type: String,
    required: true
  }
},{collection:"Producto", timestamp: true})

export default mongoose.model("Producto", ProductoSchema)
