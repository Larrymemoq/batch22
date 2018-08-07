import mongoose from 'mongoose'
const Schema = mongoose.Schema

const TiendaSchema = new Schema({
  "direccion":{
    type: String,
    required: true
  },
  "nombre":{
    type: String,
    required: true
  },
  "correo":{
    type: String,
    required: true
  },
  "telefono":{
    type: Number,
    required: true
  },
  "tipo_tienda":{
    type: Schema.Type.ObjectId,
    ref: "Tipo_Tienda",
    required: true
  }
  "calificacion"{
    type[{
      "comentario":String,
      "estrellas":Number
    }],
     required: true
  },
  "horario":{
     type: Number,
     required: true
  },
  "descripcion":{
    type: String,
    required: true
  },
  "fotos":[],
  "costo"{
    type: String,
    required: true
  }
},{collection:"Tienda", timestamp: true});

export default mongoose.model('Tieda', timestamp);
