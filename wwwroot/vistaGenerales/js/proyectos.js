
document.addEventListener('DOMContentLoaded', cargarClientes);
function cargarClientes() {

  
    const URL = "https://localhost:7174/ProyectoFacade/ListarProyectos";
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

