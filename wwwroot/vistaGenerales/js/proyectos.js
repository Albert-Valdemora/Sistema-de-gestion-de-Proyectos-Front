/*


const tabla = document.getElementById('body');

const url = "https://localhost:7174/Proyectos/Leer"

function cargarUsuarios(){

fetch(url)
    .then(r => r.json())
    .then(datos => {
        datos.forEach(dato => {
            const row = document.createElement('tr');
            row.innerHTML += `
                <td>${dato.Nombre}</td>
                <td>${dato.Descripcion}</td>
                <td>${dato.fechaInicio}</td>
                <td>${dato.fechaFinalizacion}</td>
            `;
            tabla.appendChild(row);
        }) 
    })


}

cargarUsuarios();*/


document.addEventListener('DOMContentLoaded', cargarClientes);
function cargarClientes() {

  
    const URL = "https://localhost:7174/Proyectos/Leer";
    const HTMLResponsebody = document.querySelector("#body");

    fetch(URL)
        .then((response) => response.json())
        .then((Proyectos) => {
            const tbody = Proyectos.map((dato) => `
                <tr>
                <td>${dato.nombre}</td>
                <td>${dato.descripcion}</td>
                <td>${dato.fechaInicio}</td>
                <td>${dato.fechaFinalizacion}</td>  
                </tr>`
            );
            HTMLResponsebody.innerHTML = tbody.join('');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

