// login.js
import { actualizarHeader, actualizarMain, actualizarFooter } from "./shell.js";
import { renderizarInicio } from "./inicio.js"; 

export function renderizarLogin() {
    // 1. Inyectamos los inputs en el Header (donde estaba Terabit)
    actualizarHeader(`
        <div class="header-login-form">
            <input type="number" id="user-num" placeholder="Número" class="input-header">
            <input type="password" id="user-pass" placeholder="Pass" class="input-header">
            <button class="btn-login-mini" id="btn-confirmar">LOGEAR</button>
        </div>
    `);

    // 2. Limpiamos el centro (Main) para que se vea el fondo cian
    actualizarMain(`<div style="height: 100%;"></div>`);

    // 3. Inyectamos la barra de chat en el Footer
    actualizarFooter(`
        <div class="footer-chat-container">
            <input type="text" id="mensaje-chat" placeholder="Escribe al agente..." class="input-chat">
            <button id="btn-accion-chat" class="btn-accion-chat">🎙️</button>
        </div>
    `);

    // 🚀 LÓGICA DEL AVIONCITO (✈️)
    // Debemos buscar los elementos DESPUÉS de inyectarlos
    const inputChat = document.getElementById('mensaje-chat');
    const btnAccion = document.getElementById('btn-accion-chat');

    if (inputChat && btnAccion) {
        inputChat.addEventListener('input', () => {
            if (inputChat.value.trim().length > 0) {
                btnAccion.innerText = '✈️';
                btnAccion.style.color = '#07dde9'; // Tu color cian
            } else {
                btnAccion.innerText = '🎙️';
                btnAccion.style.color = 'white';
            }
        });
    }
    
    // 🚀 EL PODER ES DE LOGIN: Re-programamos el botón desde aquí
    document.getElementById('btn-home').onclick = () => {
        console.log("Login: El usuario pide regresar al Inicio.");
        renderizarInicio(); 
    };
}
