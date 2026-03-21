// shell.js
// shell.js
import { renderizarLogin } from './login.js';

const botonHome = document.getElementById('btn-home');

// 🏁 PRIMERA INSTANCIA: El Shell escucha para traer el Login
botonHome.onclick = () => {
    console.log("Shell: Iniciando primer acceso al Login...");
    renderizarLogin(); 
};

// 💉 INYECTORES (Las herramientas para que las vistas pinten)
export function actualizarHeader(html) { document.getElementById('header-dynamic-slot').innerHTML = html; }
export function actualizarMain(html) { document.getElementById('main-slot').innerHTML = html; }
export function actualizarFooter(html) { document.getElementById('footer-slot').innerHTML = html; }
