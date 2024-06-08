document.addEventListener('DOMContentLoaded', function () {
    var peliculas = [
        { titulo: "Película 1", descripcion: "Descripción breve de la película 1", imagen: "https://via.placeholder.com/150" },
        { titulo: "Película 2", descripcion: "Descripción breve de la película 2", imagen: "https://via.placeholder.com/150" },
        // Añadir más películas según sea necesario
    ];

    var catalogo = document.getElementById('catalogo').getElementsByClassName('row')[0];

    peliculas.forEach(function(pelicula) {
        var col = document.createElement('div');
        col.className = 'col-md-3 mb-4';
        
        var card = document.createElement('div');
        card.className = 'card';
        
        var img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = pelicula.imagen;
        img.alt = pelicula.titulo;
        
        var cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        
        var cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = pelicula.titulo;
        
        var cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = pelicula.descripcion;
        
        var cardButton = document.createElement('a');
        cardButton.className = 'btn btn-primary';
        cardButton.href = '#';
        cardButton.textContent = 'Ver más';
        
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardButton);
        
        card.appendChild(img);
        card.appendChild(cardBody);
        
        col.appendChild(card);
        catalogo.appendChild(col);
    });
});

// Obtener todas las tarjetas de película
var cards = document.querySelectorAll('.card');

// Añadir un evento de clic a cada tarjeta
cards.forEach(function(card) {
    card.addEventListener('mouseover', function() {
        // Hacer algo cuando el mouse pasa sobre la tarjeta
        card.querySelector('.card-img-top').style.opacity = '0.8';
        card.querySelector('.card-body').style.opacity = '1';
    });

    card.addEventListener('mouseout', function() {
        // Hacer algo cuando el mouse sale de la tarjeta
        card.querySelector('.card-img-top').style.opacity = '1';
        card.querySelector('.card-body').style.opacity = '0';
    });
});
