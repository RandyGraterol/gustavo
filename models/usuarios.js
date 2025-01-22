const {DataTypes} = require('sequelize');// ORM manipulacion de base de datos Baby
const sequelize = require('../config/conexion.js');//archivo de conexion papu

const Usuarios = sequelize.define('usuarios',{
id:{
	type:DataTypes.INTEGER,
	autoIncrement:true,
	primaryKey:true
},
 nombre:{
 	type:DataTypes.STRING(20),
 	allowNull:false
 },
 apellido:{
 	type:DataTypes.STRING(20),
 	allowNull:false
 },
 telefono:{
 	type:DataTypes.INTEGER(20),
 	allowNull:false
 },
 correo:{
 	type:DataTypes.STRING(50),
 	allowNull:false
 },
 password:{
 	type:DataTypes.STRING(20),
    allowNull:false
 },
 direccion:{
 	type:DataTypes.STRING(30),
   allowNull:false
 }
},{timestamps:true, freezeTableName: true});
module.exports= Usuarios;