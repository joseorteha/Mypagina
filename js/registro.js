document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validaciones básicas
    if (!nombre || !email || !password || !confirmPassword) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    // Guardar los datos del usuario en LocalStorage
    const usuario = {
        nombre: nombre,
        email: email,
        password: password
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));
   // alert("Registro exitoso! Ahora serás redirigido a la página de inicio.");

    // Redirigir al usuario a la página de inicio
    window.location.href = 'index.html';
});
