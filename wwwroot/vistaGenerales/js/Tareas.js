document.addEventListener('DOMContentLoaded', cargarTareas);
function cargarTareas() {


    const URL = "https://localhost:7174/ProyectoFacade/ListarTareas";
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
        fetch('https://localhost:7174/ProyectoFacade/CrearTarea', {
            method: 'POST',
            body: JSON.stringify(customerData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        mostrarToast();

    } catch (error) {
        swal("Error!", "!Hubo un problema al registrar la Tarea!", "error");
    }
};


function mostrarToast() {
    var ejemploToast = document.getElementById('miToast');
    var toast = new bootstrap.Toast(ejemploToast);
    toast.show();
}
