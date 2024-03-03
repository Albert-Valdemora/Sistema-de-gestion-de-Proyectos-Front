document.addEventListener('DOMContentLoaded', cargarTareas);
function cargarTareas() {


    const URL = "https://localhost:7174/Tareas/Leer";
    const HTMLResponsebody = document.querySelector("#body");

    fetch(URL)
        .then((response) => response.json())
        .then((Tareas) => {
            const tbody = Tareas.map((dato) => `
                <tr>
                    <td>${dato.proyecto}</td>
                    <td>${dato.descripcion}</td>
                    <td>${dato.estado}</td>
                    <td>${dato.fechaVencimiento}</td>  
                    <td>${dato.colaboradorAsignado}</td>
                </tr>`
            );
            HTMLResponsebody.innerHTML = tbody.join('');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}


function registroCliente(){
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const expiry = document.getElementById('expiry').value;
    const estado = document.getElementById('estado').value;
    const colaborador = document.getElementById('colaborador').value;


    const customerData = {
        Proyecto: nombre,
        Descripcion: descripcion,
        Estado: estado,
        FechaVencimiento: expiry,
        ColaboradorAsignado: colaborador
    };

    try {
        fetch('https://localhost:7174/Tareas/Agregar', {
            method: 'POST',
            body: JSON.stringify(customerData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

    } catch (error) {
        swal("Error!", "!Hubo un problema al registrar la Tarea!", "error");
    }
};

