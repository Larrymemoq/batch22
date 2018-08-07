import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Tipo_TiendaSchema = new Schema({
  "name":{
    type: String,
    required: true
  },
  "descripcion":{
    type: String,
    required: true
  }
},{collection:"Tipo_Tienda", timestamp: true});

export default mongoose.model("Tipo_Tienda", Tipo_TiendaSchema)
