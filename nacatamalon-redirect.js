/*
 * gammafp.com ahora es NacatamalOn: un aviso, en español e inglés, que lleva a nacatamalon.com en
 * 5 segundos. Tocar el aviso (sin desplazarlo) para la cuenta atrás, para poder leerlo con calma;
 * desplazarlo no la para. "Ir" lleva al
 * momento y "Quedarme" lo cierra (vuelve a salir la próxima vez que se abra la web).
 */
(function () {
    var DESTINO = 'https://nacatamalon.com';
    var SEGUNDOS = 5;
    var IMG = '/nacatamalon/';

    var mostrar = function () {
        var estilo = document.createElement('style');
        estilo.textContent =
            '#nacatamalon-aviso{position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;' +
            'padding:16px;background:rgba(6,7,12,.8);font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif}' +
            '#nacatamalon-aviso .caja{max-width:1040px;width:100%;max-height:100%;overflow:auto;padding:20px 20px 0;border-radius:16px;' +
            'background:#14161f;color:#f2f2f5;box-shadow:0 24px 70px rgba(0,0,0,.55);text-align:center;box-sizing:border-box}' +
            '#nacatamalon-aviso .contenido{display:grid;grid-template-columns:1fr;gap:0 28px;align-items:center}' +
            '@media (min-width:760px){#nacatamalon-aviso .contenido{grid-template-columns:minmax(0,1fr) minmax(0,1fr);text-align:left}' +
            '#nacatamalon-aviso .contenido .logo{margin-left:0}#nacatamalon-aviso .portada{max-height:40vh}#nacatamalon-aviso .es h2{margin-top:0}}' +
            '#nacatamalon-aviso .logo{width:140px;max-width:45%;height:auto;margin:0 auto 12px;display:block}' +
            '#nacatamalon-aviso .portada{width:100%;height:auto;max-height:30vh;object-fit:contain;border-radius:10px;display:block;background:#000}' +
            '#nacatamalon-aviso .fila{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:8px}' +
            '#nacatamalon-aviso .fila img{width:100%;aspect-ratio:16/9;max-height:12vh;object-fit:cover;border-radius:8px;display:block}' +
            '#nacatamalon-aviso h2{margin:16px 0 6px;font-size:20px;line-height:1.25}' +
            '#nacatamalon-aviso p{margin:0 0 10px;font-size:15px;line-height:1.55;color:#c9cad3}' +
            '#nacatamalon-aviso .en h2{margin-top:18px;font-size:17px}' +
            '#nacatamalon-aviso .en p{font-size:13.5px;color:#a3a5b2}' +
            '#nacatamalon-aviso strong{color:#f2f2f5}' +
            '#nacatamalon-aviso .pie{position:sticky;bottom:0;margin:12px -20px 0;padding:4px 20px 18px;background:#14161f;border-top:1px solid #2a2d3a}' +
            '#nacatamalon-aviso .cuenta{margin:12px 0 12px;font-size:14px;color:#c9cad3}' +
            '#nacatamalon-aviso .cuenta b{color:#ff7a2f}' +
            '#nacatamalon-aviso .botones{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}' +
            '#nacatamalon-aviso a.ir,#nacatamalon-aviso button{font:inherit;font-size:15px;padding:11px 20px;border-radius:9px;cursor:pointer;text-decoration:none}' +
            '#nacatamalon-aviso a.ir{background:#ff7a2f;color:#14161f;font-weight:700;border:0}' +
            '#nacatamalon-aviso button{background:transparent;color:#c9cad3;border:1px solid #3a3d4d}';
        document.head.appendChild(estilo);

        var aviso = document.createElement('div');
        aviso.id = 'nacatamalon-aviso';
        aviso.setAttribute('role', 'dialog');
        aviso.setAttribute('aria-modal', 'true');
        aviso.setAttribute('aria-labelledby', 'nacatamalon-aviso-titulo');
        aviso.innerHTML =
            '<div class="caja">' +
            '<div class="contenido">' +
            '<div class="medios">' +
            '<img class="logo" src="' + IMG + 'logo-dark.png" alt="NacatamalOn">' +
            '<img class="portada" src="' + IMG + 'sunset-drive.jpg" alt="Sunset Drive, made with NacatamalOn">' +
            '<div class="fila">' +
            '<img src="' + IMG + 'mode-7.webp" alt="Mode 7">' +
            '<img src="' + IMG + 'campfire.webp" alt="Campfire">' +
            '<img src="' + IMG + 'doom-fire.webp" alt="Doom fire">' +
            '</div>' +
            '</div>' +
            '<div class="textos">' +
            '<div class="es" lang="es">' +
            '<h2 id="nacatamalon-aviso-titulo">gammafp ahora es NacatamalOn</h2>' +
            '<p>Durante años aquí compartí tutoriales, herramientas y juegos para la web. Ahora estoy construyendo algo más grande: ' +
            '<strong>un motor de juegos 2D y 3D para el navegador</strong>, hecho para crear juegos que se sienten como los de 1997. ' +
            'Paletas cortas, píxeles exactos, Mode 7, niebla y fuego, todo en WebGPU.</p>' +
            '<p>Es gratuito, de código abierto, y lo estoy haciendo para ti.</p>' +
            '</div>' +
            '<div class="en" lang="en">' +
            '<h2>gammafp is now NacatamalOn</h2>' +
            '<p>For years I shared tutorials, tools and games for the web here. Now I\'m building something bigger: ' +
            '<strong>a 2D and 3D game engine for the browser</strong>, made for games that feel like 1997. ' +
            'Short palettes, exact pixels, Mode 7, fog and fire, all on WebGPU.</p>' +
            '<p>It\'s free, open source, and I\'m making it for you.</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="pie">' +
            '<div class="cuenta" aria-live="polite"></div>' +
            '<div class="botones">' +
            '<a class="ir" href="' + DESTINO + '">Ir a nacatamalon.com · Go</a>' +
            '<button type="button" class="quedarme">Quedarme · Stay</button>' +
            '</div>' +
            '</div>' +
            '</div>';
        document.body.appendChild(aviso);

        var cuenta = aviso.querySelector('.cuenta');
        var quedan = SEGUNDOS;
        var reloj = null;
        var pintar = function () {
            cuenta.innerHTML = reloj === null
                ? 'Cuenta atrás en pausa · Countdown paused'
                : 'Te llevamos en <b>' + quedan + '</b> s · Taking you there in <b>' + quedan + '</b> s';
        };
        var parar = function () {
            if (reloj === null) return;
            clearInterval(reloj);
            reloj = null;
            pintar();
        };
        reloj = setInterval(function () {
            quedan -= 1;
            if (quedan <= 0) {
                clearInterval(reloj);
                location.href = DESTINO;
                return;
            }
            pintar();
        }, 1000);
        pintar();

        // Quien toca el aviso lo está leyendo: la cuenta atrás espera. Desplazarlo no la para (click no salta
        // tras un gesto de desplazamiento en móvil), y los botones tampoco.
        aviso.querySelector('.caja').addEventListener('click', function (event) {
            if (!event.target.closest('a,button')) parar();
        });

        aviso.querySelector('.quedarme').addEventListener('click', function () {
            parar();
            aviso.remove();
        });
        aviso.querySelector('.ir').focus({ preventScroll: true });
    };

    if (document.body) mostrar();
    else document.addEventListener('DOMContentLoaded', mostrar);
})();
