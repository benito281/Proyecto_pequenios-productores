 let formulario=document.querySelector('#formproductores');
  formulario.addEventListener('submit',function(e){
let alerta=document.getElementById('alerta');
let nombres=document.querySelector('#nombres').value;
let apellido=document.querySelector('#apellido').value;
let correo=document.querySelector('#correo').value;
let provincia=document.querySelector('#provincia').value;

    e.preventDefault();
    let datos= {
      'nombres':nombres,
      'apellido':apellido,
      'correo':correo,
      'provincia':provincia
    }
    
    const registrarUsuarios= async ()=>{
      const data= await fetch(`http://localhost:3000/users/adduser`,{
          'method':"POST",
          'headers':{'Content-Type':"Application/json"},
          'body':JSON.stringify(datos) 
        })
        console.log(data);
        if (data) {
          alerta.innerHTML += `<div class="alert alert-success" role="alert">
          Se a registrado correctamente al usuario
          </div>`
        }
   
        else{
          alerta.innerHTML += `<div class="alert alert-danger" role="alert">
          Algo a salido mal
          </div>`
        }
    }
    registrarUsuarios();


  })