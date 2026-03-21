// login.js
import { montarEscenario } from './shell.js';
import { fabricarCasita } from './casita.js'; // 🏠 Traemos la librería

export function iniciarLogin() {
    const layoutLogin = `
        <div class="layout-standard">
            <header id="header-slot" class="header"></header>
            <main id="main-slot"></main>
            <footer id="footer-slot"></footer>
        </div>
    `;

    const slots = montarEscenario(layoutLogin);

    // 🚀 INSERTAMOS LA CASITA COMO UNA PIEZA DE LEGO
    const miCasita = fabricarCasita({
        accion: () => alert("Saliendo del login...") 
    });
    
    // La ponemos en la parte "fija" del header
    slots.header.appendChild(miCasita);

    // Luego inyectamos los inputs al lado
    const formContainer = document.createElement('div');
    formContainer.className = 'form-header';
    formContainer.innerHTML = `
        <input type="number" placeholder="Usuario">
        <input type="password" placeholder="Pass">
        <button class="btn-logear">LOGEAR</button>
    `;
    slots.header.appendChild(formContainer);
}
