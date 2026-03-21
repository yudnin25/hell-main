// inicio.js
import { actualizarHeader, actualizarMain, actualizarFooter } from "./shell.js";
import { renderizarLogin } from "./login.js"; 

export function renderizarInicio() {
    // 1. Header con el logo de Terabit limpio
    actualizarHeader(`
        <div class="logo-terabit-container">
            <img src="css/img/tera.png" alt="Terabit Logo" style="height: 80%;">
        </div>
    `);

    // 2. Main y Footer listos para recibir cosas después
    actualizarMain(`<div id="inicio-content"></div>`);
    actualizarFooter(`<div class="footer-recto">SISTEMA TERABIT LISTO</div>`);

    // 🚀 RELEVO: Devolvemos la escucha para que el próximo clic traiga el Login
    document.getElementById('btn-home').onclick = () => {
        renderizarLogin();
    };
}
