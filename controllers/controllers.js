//tabla usuarios de la base de datos
const usuarios = require('../models/usuarios.js');
//////////////////////////////////////////////////////////////////
const index = (req,res)=>{
try{
res.render('index');
}catch(error){
console.error(error.message);
res.status(500).send(`Error en la solicitud al servidor :_:${error.message}`);
}
}

//////////////////////////////////////////////////////////////////
const login = (req,res)=>{
try{
res.render('loginRegister');
}catch(error){
console.error(error.message);
res.status(500).send(`Error en la solicitud al servidor :_:${error.message}`);	
}
}
////////////////////////////////////////////////////////////////
const registerPost = async(req,res)=>{
try{
const {nombre,apellido,telefono,email,password,direccion} = req.body;
await usuarios.create({nombre,apellido,telefono,correo:email,password,direccion});
res.status(200).json({status:true});
}catch(error){
console.error(error.message);
res.status(500).json({status:false});
}
}
////////////////////////////////////////////////////////////////
const loginPost = async(req,res)=>{
try{
const {email2,password2} = req.body;
const user = await usuarios.findOne({where:{correo:email2}});
if(user){
	console.log(`datos del usuario ${JSON.stringify(user)}`);
	res.status(200).json({status:true});
}else{
	console.log('Sin coincidencias de usuario');
	res.status(200).json({status:false});
}
}catch(error){
console.error(error.message);
res.status(500).json({status:null});
}
}
////////////////////////////////////////////////////////////////
module.exports = {
	index,login,registerPost,loginPost
}