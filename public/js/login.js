const formularioLogin = document.querySelector('.formularioLogin');

formularioLogin.addEventListener('submit',e=>{
	e.preventDefault();
    const email2 = document.querySelector('#email2').value;
    const password2 = document.querySelector('#password2').value;

    fetch('/loginPost',{
    	method:"POST",
    	headers:{
    		"Content-Type":"application/json"
    	},
    	body:JSON.stringify({email2,password2})
    })
    .then(res=>res.json())
    .then(res=>{
    	if(res.status){
    		Swal.fire('Bienvenido al sistema');
    		setTimeout(()=>{
            window.location.href='/home';
    		},2000)
    		
    	}else if(!res.status){
    		Swal.fire('Correo o contraseñas incorrectos vuelve a intentarlo');
    	}else{
    		Swal.fire('Error en el servidor Spider Papu');
    	}
    })
});