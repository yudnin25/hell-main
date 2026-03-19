// Detectamos si estamos en Railway o en Local
const IS_LOCAL = window.location.hostname === 'localhost';

const URLS = {
    // Cuando subas la tienda a Railway, cambiarás 'URL_DE_TU_TIENDA' por la real
    tienda: IS_LOCAL 
        ? '../modulo_tienda/tienda_render.js' 
        : 'https://URL_DE_TU_TIENDA_EN_RAILWAY.up.railway.app/tienda_render.js',
    chat: IS_LOCAL 
        ? '../modulo_chat/chat_render.js' 
        : 'https://URL_DE_TU_CHAT_EN_RAILWAY.up.railway.app/chat_render.js'
};

export async function cargarModulo(nombre) {
    const slots = {
        header: document.getElementById('header-slot'),
        main: document.getElementById('main-slot'),
        footer: document.getElementById('footer-slot')
    };

    slots.main.innerHTML = "<h3>Conectando con el módulo...</h3>";

    try {
        const ruta = URLS[nombre];
        const modulo = await import(ruta);
        
        if (nombre === 'tienda') modulo.iniciarTienda(slots);
        if (nombre === 'chat') modulo.iniciarChat(slots);

    } catch (error) {
        console.error("Error de conexión:", error);
        slots.main.innerHTML = `
            <div style="color:red; padding:20px; border:1px solid red;">
                <p>⚠️ No se pudo cargar el módulo <b>${nombre}</b>.</p>
                <small>Causa: El módulo aún no ha sido desplegado en Railway o la URL es incorrecta.</small>
            </div>`;
    }
}

window.cargarModulo = cargarModulo;
