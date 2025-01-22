const formularioCreate = document.getElementById('formularioCreate');

formularioCreate.addEventListener('submit',e =>{

e.preventDefault();

const nombre = document.querySelector('#nombre').value;
const apellido = document.querySelector('#apellido').value;
const telefono = document.querySelector('#telefono').value;
const email = document.querySelector('#email').value;
const password = document.querySelector('#password').value;
const direccion = document.querySelector('#direccion').value;

fetch('/registerPost',{
	method:"POST",
	headers:{
		"Content-Type":"application/json"
	},
	body:JSON.stringify({nombre,apellido,telefono,email,password,direccion})
})
.then(res=>res.json())
.then(res=>{
	if(res.status){
     Swal.fire('Registro Completado');
	}else{
	 Swal.fire('Error al completar Registro');
	}
})

});