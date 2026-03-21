// shell.js
import { iniciarBienvenida } from './bienvenida.js';

// 🧼 Función para montar el escenario que el mundo pida
export function montarEscenario(htmlLayout) {
    const contenedor = document.getElementById('layout-container');
    contenedor.innerHTML = ""; // Limpieza total de mundos anteriores
    contenedor.innerHTML = htmlLayout;

    // Retornamos los slots para que el mundo sepa dónde "pintar"
    return {
        header: document.getElementById('header-slot'),
        main: document.getElementById('main-slot'),
        footer: document.getElementById('footer-slot'),
        btnHome: document.getElementById('btn-home')
    };
}

// 🚀 Al iniciar la Web, cargamos el primer mundo: BIENVENIDA
window.onload = () => {
     console.log("Shell: Cargando mundo inicial...");
    iniciarBienvenida();
};
