function handleCredentialResponse(response) {
    const responsePayload = decodeJwtResponse(response.credential);
    console.log("ID: " + responsePayload.sub);
    console.log('Full Name: ' + responsePayload.name);
    console.log('Given Name: ' + responsePayload.given_name);
    console.log('Family Name: ' + responsePayload.family_name);
    console.log("Image URL: " + responsePayload.picture);
    console.log("Email: " + responsePayload.email);

    // Guarda la información del usuario en localStorage o envíala a tu backend
    localStorage.setItem('usuario', JSON.stringify({
        id: responsePayload.sub,
        nombre: responsePayload.name,
        email: responsePayload.email,
        imagen: responsePayload.picture
    }));

    // Redirigir a la página de inicio
    window.location.href = 'index.html';
}

function decodeJwtResponse(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

// Renderizar el botón de Google Sign-In
window.onload = function () {
    google.accounts.id.initialize({
        client_id: '440184815308-kaktel7ko1pm405k5undc56fpfpg054e.apps.googleusercontent.com',
        callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
        document.getElementById('g_id_signin'),
        { theme: 'outline', size: 'large' }  // Personaliza el botón
    );
    google.accounts.id.prompt(); // Mostrar el cuadro emergente de una sola vez.
}
