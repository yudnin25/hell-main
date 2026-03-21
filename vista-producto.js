// js/vista-producto.js

export function cargarVistaProducto(datosProducto) {
    const main = document.getElementById('main-slot');
    const layout = document.querySelector('.layout');

    // 1. Ocultamos lo que estorba (usando la clase que hablamos antes)
    layout.classList.add('modo-producto');

    // 2. Pintamos la nueva pantalla
    main.innerHTML = `
        <div class="pantalla-completa-producto">
            <button id="btn-cerrar-producto">❌ Cerrar</button>
            <img src="${datosProducto.imagen}" style="width: 100%; max-height: 400px; object-fit: contain;">
            <h1 style="color: #07dde9;">${datosProducto.nombre}</h1>
            <p style="color: white;">${datosProducto.descripcion}</p>
            <p style="color: #ff0000; font-weight: bold;">Precio: ${datosProducto.precio}</p>
        </div>
    `;

    // 3. Programamos el botón de cerrar para que devuelva el Header/Footer
    document.getElementById('btn-cerrar-producto').onclick = () => {
        layout.classList.remove('modo-producto');
        // Aquí podrías llamar a la función que recarga el inicio
    };
}
