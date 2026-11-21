/* GORDIS GUITARS · tienda y carrito (no hace falta tocar este archivo) */
(function () {
  var P = window.PRODUCTOS || [];
  var CATS = ["Guitarras", "Bajos", "Amplificadores", "Pedales y efectos", "Accesorios", "Micrófonos", "Audio y estudio"];
  var estado = { cat: "Todo", q: "", orden: "rel" };
  var carrito = {};
  try { carrito = JSON.parse(localStorage.getItem("gg-carrito") || "{}") || {}; } catch (e) { carrito = {}; }
  function guardar() { try { localStorage.setItem("gg-carrito", JSON.stringify(carrito)); } catch (e) {} }
  function $(s) { return document.querySelector(s); }

  var lista, chips;

  function pintarChips() {
    var cats = ["Todo", "Vintage"].concat(CATS);
    chips.innerHTML = cats.map(function (c) {
      var n = c === "Todo" ? P.length : c === "Vintage" ? P.filter(function (p) { return p.estado === "Vintage"; }).length : P.filter(function (p) { return p.categoria === c; }).length;
      if (!n) return "";
      return '<button class="chip' + (estado.cat === c ? " activo" : "") + '" data-cat="' + c + '">' + c + "<small>" + n + "</small></button>";
    }).join("");
  }

  function pintar() {
    var q = estado.q.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    var items = P.map(function (p, i) { return { p: p, i: i }; }).filter(function (o) {
      var p = o.p;
      if (estado.cat === "Vintage" && p.estado !== "Vintage") return false;
      if (estado.cat !== "Todo" && estado.cat !== "Vintage" && p.categoria !== estado.cat) return false;
      if (!q) return true;
      return (p.nombre + " " + p.marca + " " + p.categoria).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").indexOf(q) > -1;
    });
    var precio = function (o) { return o.p.precio == null ? Infinity : o.p.precio; };
    if (estado.orden === "menor") items.sort(function (a, b) { return precio(a) - precio(b); });
    else if (estado.orden === "mayor") items.sort(function (a, b) { return (b.p.precio || 0) - (a.p.precio || 0); });
    else if (estado.orden === "az") items.sort(function (a, b) { return a.p.nombre.localeCompare(b.p.nombre, "es"); });
    else items.sort(function (a, b) { return (!!b.p.foto - !!a.p.foto) || CATS.indexOf(a.p.categoria) - CATS.indexOf(b.p.categoria); });

    lista.innerHTML = items.map(function (o) { return tarjetaProducto(o.p, o.i, true); }).join("");
    $("[data-resultado]").textContent = items.length + (items.length === 1 ? " producto" : " productos");
    $("[data-vacio]").hidden = items.length > 0;
  }

  function pintarCarrito() {
    var ids = Object.keys(carrito).filter(function (k) { return P[k]; });
    var total = 0, cant = 0, consultar = false;
    $("[data-items]").innerHTML = ids.length ? ids.map(function (k) {
      var p = P[k], n = carrito[k];
      cant += n;
      if (p.precio == null) consultar = true; else total += p.precio * n;
      var mini = p.foto ? '<img src="' + esc(p.foto) + '" alt="">' : dibujoProducto(p.categoria);
      return '<div class="c-item"><div class="mini">' + mini + "</div><div><b>" + esc(p.nombre) + "</b><span>" + formatoPrecio(p.precio) + "</span>" +
        '<div class="cant"><button data-menos="' + k + '" aria-label="Quitar uno">−</button>' + n + '<button data-mas="' + k + '" aria-label="Agregar uno">+</button></div></div>' +
        '<button class="quitar" data-quitar="' + k + '">Quitar</button></div>';
    }).join("") : '<p class="vacio">Tu carrito está vacío.</p>';
    $("[data-total]").textContent = formatoPrecio(total) + (consultar ? " + a consultar" : "");
    document.querySelectorAll("[data-cuenta]").forEach(function (e) { e.textContent = cant; });

    var texto = "¡Hola Lucas! Quiero hacer este pedido desde la web de Gordis Guitars:\n\n" +
      ids.map(function (k) { return "• " + carrito[k] + " x " + P[k].nombre + " — " + formatoPrecio(P[k].precio); }).join("\n") +
      "\n\nTotal: " + formatoPrecio(total) + (consultar ? " + productos a consultar" : "") + "\n¿Cómo seguimos?";
    var btn = $("[data-pedir]");
    btn.href = ids.length ? linkWhatsapp(texto) : "#";
    btn.style.opacity = ids.length ? 1 : .5;
    btn.style.pointerEvents = ids.length ? "auto" : "none";
  }

  function toast(t) {
    var e = $("[data-toast]"); e.textContent = t; e.classList.add("ver");
    clearTimeout(toast.t); toast.t = setTimeout(function () { e.classList.remove("ver"); }, 1800);
  }

  document.addEventListener("DOMContentLoaded", function () {
    lista = $("[data-lista]"); chips = $("[data-chips]");
    pintarChips(); pintar(); pintarCarrito();

    chips.addEventListener("click", function (e) {
      var b = e.target.closest("[data-cat]"); if (!b) return;
      estado.cat = b.dataset.cat; pintarChips(); pintar();
    });
    $("[data-buscar]").addEventListener("input", function (e) { estado.q = e.target.value; pintar(); });
    $("[data-ordenar]").addEventListener("change", function (e) { estado.orden = e.target.value; pintar(); });

    lista.addEventListener("click", function (e) {
      var b = e.target.closest("[data-add]"); if (!b) return;
      var k = b.dataset.add, max = P[k].stock || 1;
      carrito[k] = Math.min((carrito[k] || 0) + 1, max);
      guardar(); pintarCarrito();
      b.classList.add("ok"); setTimeout(function () { b.classList.remove("ok"); }, 900);
      toast("Agregado: " + P[k].nombre);
    });

    $("[data-items]").addEventListener("click", function (e) {
      var t = e.target, k;
      if ((k = t.dataset.mas)) carrito[k] = Math.min(carrito[k] + 1, P[k].stock || 1);
      else if ((k = t.dataset.menos)) { carrito[k]--; if (carrito[k] < 1) delete carrito[k]; }
      else if ((k = t.dataset.quitar)) delete carrito[k];
      else return;
      guardar(); pintarCarrito();
    });

    var cart = $("[data-carrito]");
    document.querySelectorAll("[data-abrir-carrito]").forEach(function (b) { b.addEventListener("click", function () { cart.classList.add("abierto"); }); });
    document.querySelectorAll("[data-cerrar-carrito]").forEach(function (b) { b.addEventListener("click", function () { cart.classList.remove("abierto"); }); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") cart.classList.remove("abierto"); });
  });
})();
