let mostrar =document.getElementById('mostrarDatos')

const usuarios= async ()=>{
    const url= await fetch('http://localhost:3000/users/getusers')
    const res= await url.json()
    /*return console.log(res) */
    res.forEach(item => {
        mostrar.innerHTML += `
        <tr>
        <th scope="row">${item.nombres}</th>
        <td>${item.apellido}</td>
        <td>${item.correo}</td>
        <td>${item.provincia}</td>
        <td><a class="btn btn-primary" href="peticiones/put.html" id="${item._id}">Actualizar</a></td>
      </tr>
        `
        console.table(item)
    });
    }
    usuarios();
