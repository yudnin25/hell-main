// bienvenida.js - EL PRIMER MUNDO (LEGO)
import { montarEscenario } from './shell.js';

export function iniciarBienvenida() {
    // 🎨 1. CONECTAR EL CSS ESPECÍFICO
    if (!document.getElementById('style-bienvenida')) {
        const link = document.createElement('link');
        link.id = 'style-bienvenida';
        link.rel = 'stylesheet';
        link.href = './css/bienvenida.css'; 
        document.head.appendChild(link);
    }

    // 📐 2. DEFINIR EL LAYOUT (PLANOS DEL MUNDO)
    const miLayout = `
        <div class="layout-standard">
            <header id="header-slot" class="header">
                <div class="header-fixed">
                    <!-- 🚀 Botón Cápsula para Iniciar Sesión -->
                    <button id="btn-home" class="btn-capsula-iniciar">INICIAR</button>
                </div>
                <div id="header-dynamic-slot" class="header-dynamic"></div>
            </header>
            <main id="main-slot" class="main-content"></main>
            <footer id="footer-slot" class="footer-recto"></footer>
        </div>
    `;

    // 🏗️ 3. MONTAR EL ESCENARIO EN EL SHELL
    const slots = montarEscenario(miLayout);

    // 🖼️ 4. INYECTAR LOGO EN EL HEADER
    const dynamicHeader = document.getElementById('header-dynamic-slot');
    if (dynamicHeader) {
        dynamicHeader.innerHTML = `
            <img src="css/img/tera.png" alt="Logo Terabit">
        `;
    }

    // 📝 5. INYECTAR PRESENTACIÓN EN EL MAIN
    slots.main.innerHTML = `

        <div class="presentacion-box">
        
       <div id="panorama" style="width: 100%; height: 100vh;"></div>

            <h1>Bienvenido a Terabit</h1>
            <p>Tu plataforma de Chat, Tiendas e Inteligencia Artificial.</p>
            <button class="btn-entrar" id="btn-entrar-sistema">ENTRAR AL SISTEMA</button>
        </div>
    `;
    // ✨ 6. TEXTO DEL FOOTER
    slots.footer.innerHTML = `<span>CONECTADO AL SISTEMA TERABIT V1.0</span>`;
// Pégalo después de definir los slots.main.innerHTML
setTimeout(() => {
    pannellum.viewer('panorama', {
        "type": "equirectangular",
        "panorama": "css/img/tienda1.jpg", // Asegúrate que la ruta sea correcta
        "autoLoad": true,
        "autoRotate": -2
    });
}, 100); // El pequeño retraso asegura que el HTML ya exista en la pantalla
    // ⚡ 7. LÓGICA DE NAVEGACIÓN (LOS DISPARADORES)

    // A. El botón de la esquina (INICIAR)
   const btnIniciar = document.getElementById('btn-home');
    
    if (btnIniciar) {
        btnIniciar.onclick = async () => {
            console.log("Cargando el mundo Login... 🔐");
            
            // 💡 IMPORT DINÁMICO: Esto evita que el sistema se cuelgue al recargar
            const { iniciarLogin } = await import('./login.js');
            iniciarLogin(); 
        };
    }
}