import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
  "nombre":{
    type: String,
    required: true
  },
  "apellido":{
    type: String,
    required: true
  }
  "direcciones":[],
  "telefono":{
    type: Number,
    required: true
  },
  "correo":{
    type: String,
    required: true
  },
  "fecha_nacimiento":{
    type: Date,
  },
  "password":{
    type: String,
    required: true
  },
  "user_name":{
    type: String,
    required: true
  },
  "foto":{
    type: String,
    default:"https://st.depositphotos.com/1779253/5140/v/950/depositphotos_51401961-stock-illustration-anonymous-avatar-profile-icon-on.jpg"
  },
  "genero":{
    type: String,
    required: true
  },
  "user_pay":{
    type: String,
    required: true
  }
},{collection:"User",timestamp: true});

UserSchema.pre('save',(next) => {
  let user = this;
  if(!user.isModified('password')){return next();}
  bcrypt.genSalt(SALT,(err,salt) => {
    if(err) return next(err);
    bcrypt.hash(user.password,salt,(err,hash)=>{
      if(err) return next(err);
      user.password = hash;
      next();
    })
  })
});
 export default mongoose.model("User", UserSchema)
