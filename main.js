/* GORDIS GUITARS · funciones comunes (no hace falta tocar este archivo) */
(function () {
  var C = window.GORDIS || {};

  function linkWhatsapp(msg) {
    return "https://wa.me/" + (C.whatsapp || "") + "?text=" + encodeURIComponent(msg || C.mensajeWhatsapp || "");
  }
  function linkInstagram() { return "https://www.instagram.com/" + (C.instagram || "") + "/"; }
  window.linkWhatsapp = linkWhatsapp;

  // Precio en formato argentino: $ 1.234.567
  window.formatoPrecio = function (n) {
    if (n === null || n === undefined) return "Consultar";
    return "$ " + Number(n).toLocaleString("es-AR");
  };

  // Dibujos para productos sin foto, según la categoría
  var DIBUJOS = {
    "Guitarras": '<path d="M62 6h8v10h-8zM64 16h4v38h-4z"/><path d="M66 52c-10 0-12 8-18 10-8 3-14 9-14 18 0 11 9 16 20 16 6 0 9-3 12-3s6 3 12 3c11 0 20-5 20-16 0-9-6-15-14-18-6-2-8-10-18-10z"/><circle cx="66" cy="74" r="5"/>',
    "Bajos": '<path d="M63 4h6v14h-6zM64 18h4v36h-4z"/><path d="M66 52c-9 0-11 9-19 11-9 3-13 10-13 18 0 10 9 15 19 15 6 0 10-3 13-3s7 3 13 3c10 0 19-5 19-15 0-8-4-15-13-18-8-2-10-11-19-11z"/>',
    "Amplificadores": '<rect x="20" y="22" width="92" height="76" rx="6"/><rect x="28" y="30" width="76" height="14" rx="2"/><circle cx="66" cy="72" r="18"/><circle cx="66" cy="72" r="6"/>',
    "Pedales y efectos": '<rect x="34" y="18" width="64" height="88" rx="8"/><circle cx="50" cy="34" r="6"/><circle cx="82" cy="34" r="6"/><rect x="46" y="62" width="40" height="32" rx="4"/>',
    "Micrófonos": '<rect x="50" y="12" width="32" height="52" rx="16"/><path d="M40 52c0 15 12 26 26 26s26-11 26-26M66 78v22M50 104h32"/>',
    "Accesorios": '<path d="M66 18c20 0 34 6 34 20 0 22-20 52-34 68-14-16-34-46-34-68 0-14 14-20 34-20z"/>',
    "Audio y estudio": '<rect x="16" y="26" width="100" height="70" rx="6"/><path d="M34 40v42M54 40v42M74 40v42M94 40v42"/><rect x="29" y="52" width="10" height="8" rx="2"/><rect x="49" y="66" width="10" height="8" rx="2"/><rect x="69" y="46" width="10" height="8" rx="2"/><rect x="89" y="60" width="10" height="8" rx="2"/>'
  };
  window.dibujoProducto = function (cat) {
    return '<svg class="dibujo" viewBox="0 0 132 112" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">' + (DIBUJOS[cat] || DIBUJOS["Accesorios"]) + "</svg>";
  };

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  window.esc = esc;

  // Tarjeta de producto (se usa en la portada y en la tienda)
  window.tarjetaProducto = function (p, i, conBoton) {
    var img = p.foto ? '<img loading="lazy" src="' + esc(p.foto) + '" alt="' + esc(p.nombre) + '">' : dibujoProducto(p.categoria);
    var boton = conBoton
      ? '<button class="btn-add" data-add="' + i + '" aria-label="Agregar al carrito"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></button>'
      : '<a class="btn-add" href="tienda.html" aria-label="Ver en la tienda"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>';
    return '<article class="prod">' +
      '<div class="prod-img">' + img + '<span class="prod-tag ' + esc((p.estado || "").toLowerCase()) + '">' + esc(p.estado || "") + "</span></div>" +
      '<div class="prod-body"><span class="prod-marca">' + esc(p.marca) + '</span><h3 class="prod-nombre">' + esc(p.nombre) + "</h3>" +
      '<div class="prod-pie"><div class="prod-precio">' + formatoPrecio(p.precio) + "<small>" + (p.stock > 1 ? p.stock + " disponibles" : "Última unidad") + "</small></div>" + boton + "</div></div></article>";
  };

  document.addEventListener("DOMContentLoaded", function () {
    // Botones y datos de contacto
    document.querySelectorAll("[data-wa]").forEach(function (a) {
      a.href = linkWhatsapp(a.getAttribute("data-msg"));
      a.target = "_blank"; a.rel = "noopener";
    });
    document.querySelectorAll("[data-ig]").forEach(function (a) { a.href = linkInstagram(); a.target = "_blank"; a.rel = "noopener"; });
    document.querySelectorAll("[data-wa-texto]").forEach(function (e) { e.textContent = "+" + (C.whatsapp || ""); });
    document.querySelectorAll("[data-ig-texto]").forEach(function (e) { e.textContent = "@" + (C.instagram || ""); });
    document.querySelectorAll("[data-zona]").forEach(function (e) { e.textContent = C.zona || ""; });
    document.querySelectorAll("[data-horario]").forEach(function (e) { e.textContent = C.horario || ""; });
    document.querySelectorAll("[data-anio]").forEach(function (e) { e.textContent = new Date().getFullYear(); });

    // Menú en celular
    var menu = document.querySelector("[data-menu]"), nav = document.querySelector(".nav");
    if (menu && nav) {
      menu.addEventListener("click", function () { var a = nav.classList.toggle("abierto"); menu.setAttribute("aria-expanded", a); });
      nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { nav.classList.remove("abierto"); }); });
    }

    // Foto de Lucas: si no existe, queda el lugar reservado
    document.querySelectorAll("img[data-fallback]").forEach(function (img) {
      img.addEventListener("error", function () { img.remove(); });
      if (img.complete && img.naturalWidth === 0) img.remove();
    });

    // Productos destacados en la portada
    var dest = document.querySelector("[data-destacados]");
    if (dest && window.PRODUCTOS) {
      var orden = ["Guitarras", "Amplificadores", "Pedales y efectos", "Bajos"];
      var elegidos = window.PRODUCTOS.filter(function (p) { return p.foto && orden.indexOf(p.categoria) > -1; })
        .sort(function (a, b) { return (b.estado === "Vintage") - (a.estado === "Vintage") || orden.indexOf(a.categoria) - orden.indexOf(b.categoria); })
        .slice(0, 8);
      dest.innerHTML = elegidos.map(function (p, i) { return tarjetaProducto(p, i, false); }).join("");
    }

    // Galería: fotos/galeria/foto-1.jpg, foto-2.jpg, ...
    var gal = document.querySelector("[data-galeria]"), lb = document.querySelector("[data-lightbox]");
    if (gal) {
      var n = C.cantidadFotos || 8;
      for (var i = 1; i <= n; i++) {
        var item = document.createElement("button");
        item.className = "item revelar";
        item.innerHTML = '<div class="reservado"><div><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5-8 8"/></svg><b>Foto ' + i + '</b>fotos/galeria/foto-' + i + '.jpg</div></div>';
        (function (item, src) {
          var img = new Image();
          img.alt = "Gordis Guitars";
          img.onload = function () { item.innerHTML = ""; item.appendChild(img); item.dataset.src = src; };
          img.src = src;
        })(item, "fotos/galeria/foto-" + i + ".jpg");
        item.addEventListener("click", function () {
          if (!this.dataset.src || !lb) return;
          lb.querySelector("img").src = this.dataset.src; lb.classList.add("abierto");
        });
        gal.appendChild(item);
      }
    }
    if (lb) lb.addEventListener("click", function () { lb.classList.remove("abierto"); });

    // Animación al bajar
    var obs = "IntersectionObserver" in window ? new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("visto"); obs.unobserve(e.target); } });
    }, { threshold: .12 }) : null;
    document.querySelectorAll(".revelar").forEach(function (el) { obs ? obs.observe(el) : el.classList.add("visto"); });
  });
})();
