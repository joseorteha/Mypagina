document.addEventListener('DOMContentLoaded', function() {
    // Variables
    var perfil = {
        nombre: "Nombre del Usuario",
        correo: "correo@ejemplo.com",
        avatar: "imagenes/avatar.png"
    };

    // Función para actualizar la visualización del perfil
    function actualizarPerfil() {
        document.getElementById('nombre').textContent = perfil.nombre;
        document.getElementById('correo').textContent = perfil.correo;
        document.getElementById('avatar').src = perfil.avatar;
    }

    // Inicializar perfil
    actualizarPerfil();

    // Inicializar formulario de edición con los datos actuales del perfil
    $('#editProfileModal').on('show.bs.modal', function (event) {
        document.getElementById('nombreInput').value = perfil.nombre;
        document.getElementById('correoInput').value = perfil.correo;
    });

    // Guardar perfil
    window.guardarPerfil = function() {
        var nombreInput = document.getElementById('nombreInput').value;
        var correoInput = document.getElementById('correoInput').value;

        if (nombreInput.trim() !== "") {
            perfil.nombre = nombreInput;
        }
        if (correoInput.trim() !== "") {
            perfil.correo = correoInput;
        }

        actualizarPerfil();

        $('#editProfileModal').modal('hide');
    }
});

