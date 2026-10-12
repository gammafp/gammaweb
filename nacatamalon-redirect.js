/*
 * gammafp.com se ha mudado a nacatamalon.com: un aviso que lleva allí en 2 segundos, con la
 * opción de quedarse. Cancelar cierra el aviso; vuelve a salir la próxima vez que se abra la web.
 */
(function () {
    var DESTINO = 'https://nacatamalon.com';
    var SEGUNDOS = 2;
    var es = (navigator.language || '').toLowerCase().indexOf('es') === 0 || location.pathname.indexOf('/es/') === 0;
    var texto = es
        ? { titulo: 'Nos hemos mudado', cuerpo: 'gammafp ahora es NacatamalOn. Te llevamos a la nueva web en', ir: 'Ir ahora', quedarme: 'Cancelar' }
        : { titulo: 'We have moved', cuerpo: 'gammafp is now NacatamalOn. Taking you to the new site in', ir: 'Go now', quedarme: 'Cancel' };

    var mostrar = function () {
        var estilo = document.createElement('style');
        estilo.textContent =
            '#nacatamalon-aviso{position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;' +
            'padding:16px;background:rgba(10,12,18,.72);font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif}' +
            '#nacatamalon-aviso .caja{max-width:420px;width:100%;padding:28px 24px;border-radius:14px;background:#14161f;color:#f2f2f5;' +
            'box-shadow:0 20px 60px rgba(0,0,0,.5);text-align:center}' +
            '#nacatamalon-aviso h2{margin:0 0 10px;font-size:22px}' +
            '#nacatamalon-aviso p{margin:0 0 20px;font-size:15px;line-height:1.5;color:#c9cad3}' +
            '#nacatamalon-aviso b{color:#ff7a2f}' +
            '#nacatamalon-aviso .botones{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}' +
            '#nacatamalon-aviso a,#nacatamalon-aviso button{font:inherit;font-size:15px;padding:10px 18px;border-radius:8px;cursor:pointer;text-decoration:none}' +
            '#nacatamalon-aviso a{background:#ff7a2f;color:#14161f;font-weight:700;border:0}' +
            '#nacatamalon-aviso button{background:transparent;color:#c9cad3;border:1px solid #3a3d4d}';
        document.head.appendChild(estilo);

        var aviso = document.createElement('div');
        aviso.id = 'nacatamalon-aviso';
        aviso.setAttribute('role', 'dialog');
        aviso.setAttribute('aria-modal', 'true');
        aviso.setAttribute('aria-labelledby', 'nacatamalon-aviso-titulo');
        aviso.innerHTML =
            '<div class="caja">' +
            '<h2 id="nacatamalon-aviso-titulo"></h2>' +
            '<p><span class="cuerpo"></span> <b class="cuenta"></b> s.</p>' +
            '<div class="botones"><a class="ir"></a><button type="button" class="quedarme"></button></div>' +
            '</div>';
        aviso.querySelector('h2').textContent = texto.titulo;
        aviso.querySelector('.cuerpo').textContent = texto.cuerpo;
        var ir = aviso.querySelector('.ir');
        ir.textContent = texto.ir;
        ir.href = DESTINO;
        var quedarme = aviso.querySelector('.quedarme');
        quedarme.textContent = texto.quedarme;
        var cuenta = aviso.querySelector('.cuenta');
        document.body.appendChild(aviso);

        var quedan = SEGUNDOS;
        cuenta.textContent = String(quedan);
        var reloj = setInterval(function () {
            quedan -= 1;
            cuenta.textContent = String(Math.max(0, quedan));
            if (quedan <= 0) {
                clearInterval(reloj);
                location.href = DESTINO;
            }
        }, 1000);

        quedarme.addEventListener('click', function () {
            clearInterval(reloj);
            aviso.remove();
        });
        ir.focus();
    };

    if (document.body) mostrar();
    else document.addEventListener('DOMContentLoaded', mostrar);
})();
