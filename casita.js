// casita.js - EL COMPONENTE REUTILIZABLE

export function fabricarCasita(config = {}) {
    // 1. Creamos el elemento botón físicamente
    const btn = document.createElement('button');
    btn.id = 'btn-home';
    btn.className = 'menu-temporal-button'; // Usa el estilo neón de tus globales

    // 2. Le damos su "poder" (por defecto abrir el inicio)
    btn.onclick = config.accion || (() => {
        console.log("Casita: Regresando al Inicio...");
        // Aquí podrías llamar a iniciarBienvenida() por defecto
    });

    return btn; // 📦 Entregamos el paquete listo
}
