document.addEventListener('DOMContentLoaded', function () {
    const imagenes = document.querySelectorAll('.contenedor_imagen');
    const contenedorMaximizado = document.getElementById('contenedor-maximizado');

    imagenes.forEach(function (imagen) {
        imagen.addEventListener('click', function (event) {
            event.preventDefault();
            mostrarImagenMaximizada(imagen);
        });
    });

    function mostrarImagenMaximizada(imagen) {
        document.body.classList.add('no-scroll');
        
        contenedorMaximizado.innerHTML = `
            <div id="contenedor-imagen-maximizada">
                <img src="${imagen.src}" alt="${imagen.alt}" class="imagen-maximizada">
                <button id="boton-restaurar">SALIR</button>
            </div>
        `;

        const botonRestaurar = document.getElementById('boton-restaurar');
        botonRestaurar.addEventListener('click', ocultarImagenMaximizada);

        contenedorMaximizado.style.display = 'block';
    }

    function ocultarImagenMaximizada() {
        document.body.classList.remove('no-scroll');
        contenedorMaximizado.innerHTML = '';
        contenedorMaximizado.style.display = 'none';
    }
});
