(function () {
  "use strict";

  var D = window.DIETA;
  var main = document.getElementById("main");

  if (!D || !D.recetas) {
    main.innerHTML = '<div class="card empty"><h3>No se han podido cargar los datos</h3>' +
      "<p>Falta el archivo data.js o tiene un error. Recarga la página y, si sigue igual, revisa data.js.</p></div>";
    return;
  }

  /* ================= ICONOS ================= */
  var ICON = {
    menu: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 9.5h17M8 3v4M16 3v4M7.5 13.5h2M11 13.5h2M14.5 13.5h2M7.5 17h2M11 17h2"/>',
    desayuno: '<path d="M11.6 3.6c2.7-.3 4.6 1.4 6 3.4 1.2 1.6 3 2.6 3 5 0 3.2-2.6 5-4.4 6.4-1.9 1.5-4.4 2.4-6.8 1.6-2.3-.7-3.6-2.6-4.6-4.6-1-2-1.6-4.5-.3-6.6 1.3-2.5 4.1-4.9 7.1-5.2z"/><circle cx="11.6" cy="12" r="3.2"/>',
    almuerzo: '<path d="M7.5 8h9l-1 11.3a1.8 1.8 0 0 1-1.8 1.7h-3.4a1.8 1.8 0 0 1-1.8-1.7L7.5 8z"/><path d="M7 8h10V6.2C17 5 16.2 4 15 4H9C7.8 4 7 5 7 6.2V8z"/><path d="M10.5 4V2.5h3V4M8.4 12.5h7.2"/>',
    comida: '<path d="M3.5 12h17c0 4.4-3.8 7.5-8.5 7.5S3.5 16.4 3.5 12z"/><path d="M9.5 21h5M8.5 9c-.9-1.1.9-2.1 0-3.4M12 9c-.9-1.1.9-2.1 0-3.4M15.5 9c-.9-1.1.9-2.1 0-3.4"/>',
    merienda: '<path d="M12 8.2c-1.4-1.1-3.6-1.5-5.2-.4-2.4 1.7-2.5 5.4-1.2 8.4 1.1 2.6 3 4.7 4.7 4.5.7-.1 1.1-.5 1.7-.5s1 .4 1.7.5c1.7.2 3.6-1.9 4.7-4.5 1.3-3 1.2-6.7-1.2-8.4-1.6-1.1-3.8-.7-5.2.4z"/><path d="M12 8.2c.1-1.9.7-3.4 2-4.5M12.9 5.4c1.3-1.5 3.2-1.6 4.6-1-.4 1.6-2 2.9-4.6 1z"/>',
    cena: '<path d="M19.5 14.6A7.8 7.8 0 1 1 9.4 4.5a6.2 6.2 0 0 0 10.1 10.1z"/><path d="M17 3.5v3M15.5 5h3"/>',
    check: '<path d="M5 12.5l4.2 4.2L19 7"/>'
  };
  function svg(name, sw) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + (sw || 1.8) +
      '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICON[name] + "</svg>";
  }

  /* ================= CONSTANTES ================= */
  var TIPOS = [
    { id: "desayuno", tab: "desayunos", singular: "Desayuno", plural: "Desayunos", el: "el desayuno" },
    { id: "almuerzo", tab: "almuerzos", singular: "Almuerzo", plural: "Almuerzos", el: "el almuerzo" },
    { id: "comida", tab: "comidas", singular: "Comida", plural: "Comidas", el: "la comida" },
    { id: "merienda", tab: "meriendas", singular: "Merienda", plural: "Meriendas", el: "la merienda" },
    { id: "cena", tab: "cenas", singular: "Cena", plural: "Cenas", el: "la cena" }
  ];
  var TABS = [{ id: "menu", label: "Menú", icon: "menu" }].concat(TIPOS.map(function (t) {
    return { id: t.tab, label: t.plural, icon: t.id, tipo: t.id };
  }));
  var LETRA = { lunes: "L", martes: "M", miercoles: "X", jueves: "J", viernes: "V", sabado: "S", domingo: "D" };
  var MACROS = [
    { k: "p", label: "Proteínas", short: "Prot." },
    { k: "hc", label: "Hidratos", short: "Hidr." },
    { k: "g", label: "Grasas", short: "Grasa" }
  ];
  var KEYS = { tab: "dieta_tab_v1", person: "dieta_person_v1", week: "dieta_week_v1", theme: "dieta_theme_v1" };

  /* ================= UTILIDADES ================= */
  function load(k, def) {
    try { var v = localStorage.getItem(k); return v === null ? def : v; } catch (e) { return def; }
  }
  function save(k, v) {
    try { localStorage.setItem(k, String(v)); } catch (e) { /* sin almacenamiento: no pasa nada */ }
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
  function norm(s) {
    return String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
  }
  var nf0 = new Intl.NumberFormat("es-ES", { maximumFractionDigits: 0 });
  var nf1 = new Intl.NumberFormat("es-ES", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  function k0(n) { return nf0.format(Math.round(n)); }
  function g1(n) { return nf1.format(Math.round(n * 10) / 10); }
  function lista(items) {
    try { return new Intl.ListFormat("es", { style: "long", type: "conjunction" }).format(items); }
    catch (e) {
      return items.length < 2 ? items.join("") : items.slice(0, -1).join(", ") + " y " + items[items.length - 1];
    }
  }
  function todayIdx() { return (new Date().getDay() + 6) % 7; }
  function reducedMotion() { return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches; }
  function dishStyle(r) { return r && /^#[0-9a-f]{6}$/i.test(r.color || "") ? "--dish:" + r.color + ";" : ""; }

  /* ================= DATOS ================= */
  function tipoInfo(id) { return TIPOS.filter(function (t) { return t.id === id; })[0]; }
  function tabInfo(id) { return TABS.filter(function (t) { return t.id === id; })[0]; }
  function personas() { return D.personas || []; }
  function personaNombre(pid) {
    var p = personas().filter(function (x) { return x.id === pid; })[0];
    return p ? p.nombre : pid;
  }
  function recetas(tipo) { return (D.recetas && D.recetas[tipo]) || []; }
  function receta(tipo, id) { return recetas(tipo).filter(function (r) { return r.id === id; })[0] || null; }
  function pdata(r, pid) { return r && r.personas ? r.personas[pid] || null : null; }
  function nombre(r, pid) { var p = pdata(r, pid); return (p && p.nombre) || r.nombre; }

  /* Totales: los que pone el Excel (desayunos y almuerzos) o la suma de los ingredientes. */
  function totales(p) {
    if (!p) return null;
    if (p.total && typeof p.total.kcal === "number") return p.total;
    var t = { kcal: 0, p: 0, hc: 0, g: 0 }, any = false;
    (p.ingredientes || []).forEach(function (i) {
      ["kcal", "p", "hc", "g"].forEach(function (k) {
        if (typeof i[k] === "number") { t[k] += i[k]; any = true; }
      });
    });
    return any ? t : null;
  }

  function objetivo(pid, tipo) { return ((D.objetivos || {})[pid] || {})[tipo] || null; }
  function valorAprox(r) {
    if (!r) return null;
    if (typeof r.aprox === "number") return r.aprox;
    if (typeof r.min === "number" && typeof r.max === "number") return (r.min + r.max) / 2;
    return typeof r.max === "number" ? r.max : null;
  }
  function objetivoDiario(pid) {
    var t = objetivo(pid, "total");
    if (!t) return null;
    var p = valorAprox(t.p), hc = valorAprox(t.hc), g = valorAprox(t.g);
    if (p == null || hc == null || g == null) return null;
    return { p: p, hc: hc, g: g, kcal: 4 * p + 4 * hc + 9 * g };
  }

  function semanas() { return (D.menu && D.menu.semanas) || []; }
  function slot(si, di, tipo) {
    var s = semanas()[si];
    var d = s && s.dias[di];
    return d ? d[tipo] || null : null;
  }
  function slotReceta(tipo, s) { return s && s.receta ? receta(tipo, s.receta) : null; }
  function diaTotales(si, di, pid) {
    var res = { kcal: 0, p: 0, hc: 0, g: 0, sinDatos: [] };
    TIPOS.forEach(function (t) {
      var s = slot(si, di, t.id);
      if (!s) return;
      var tot = totales(pdata(slotReceta(t.id, s), pid));
      if (!tot) { res.sinDatos.push(t.id); return; }
      res.kcal += tot.kcal; res.p += tot.p; res.hc += tot.hc; res.g += tot.g;
    });
    return res;
  }
  function apariciones(tipo, id) {
    var partes = [], total = 0, posibles = 0;
    semanas().forEach(function (s) {
      var dias = [];
      s.dias.forEach(function (d) {
        posibles++;
        if (d[tipo] && d[tipo].receta === id) dias.push(d.dia.toLowerCase());
      });
      total += dias.length;
      if (dias.length) partes.push(s.nombre + ": " + (dias.length === s.dias.length ? "todos los días" : lista(dias)));
    });
    if (!total) return ["No está en el menú"];
    if (total === posibles) return ["Todos los días"];
    return partes;
  }

  /* ================= ESTADO ================= */
  var state = {
    tab: load(KEYS.tab, "menu"),
    person: load(KEYS.person, personas()[0] && personas()[0].id),
    week: parseInt(load(KEYS.week, "0"), 10) || 0,
    day: todayIdx(),
    sheet: null
  };
  if (!tabInfo(state.tab)) state.tab = "menu";
  if (!personas().some(function (p) { return p.id === state.person; })) state.person = personas()[0] && personas()[0].id;
  state.week = clamp(state.week, 0, Math.max(0, semanas().length - 1));

  /* ================= PIEZAS ================= */
  function personSeg() {
    if (personas().length < 2) return "";
    return '<div class="seg" role="radiogroup" aria-label="Persona">' + personas().map(function (p) {
      return '<button type="button" role="radio" aria-checked="' + (p.id === state.person) + '" data-person="' +
        esc(p.id) + '">' + esc(p.nombre) + "</button>";
    }).join("") + "</div>";
  }

  /* Se compara con el valor ya redondeado tal y como se muestra en pantalla. */
  function estadoRango(v, r) {
    if (!r) return "";
    if (typeof r.min === "number" && v < r.min) return "low";
    if (typeof r.max === "number" && v > r.max) return "high";
    return typeof r.min === "number" || typeof r.max === "number" ? "ok" : "";
  }
  function stIcon(st) {
    if (st === "ok") return '<span class="st ok">' + svg("check", 2.6) + '<span class="sr-only">dentro del objetivo</span></span>';
    if (st === "low") return '<span class="st out" aria-hidden="true">↓</span><span class="sr-only">por debajo del objetivo</span>';
    if (st === "high") return '<span class="st out" aria-hidden="true">↑</span><span class="sr-only">por encima del objetivo</span>';
    return "";
  }

  /* Etiqueta de información nutricional. rows: [{n, v, t, energy}] */
  function etiqueta(o) {
    var h = '<section class="label" aria-label="' + esc(o.aria || "Información nutricional") + '">' +
      '<div class="label-head"><h3 class="label-title">' + esc(o.titulo || "Información nutricional") + "</h3>" +
      '<span class="label-who">' + o.quien + "</span></div>" +
      '<div class="rule thick"></div>' +
      '<div class="label-cols"><span></span><span>' + o.cols[0] + "</span><span>" + o.cols[1] + "</span></div>";
    o.rows.forEach(function (r) {
      h += '<div class="label-row' + (r.energy ? " energy" : "") + '"><span class="n">' + r.n + '</span><span class="v">' +
        r.v + '</span><span class="t">' + r.t + "</span></div>";
    });
    h += '<div class="rule thick"></div>';
    if (o.foot) h += '<p class="label-foot">' + o.foot + "</p>";
    return h + "</section>";
  }

  function mealRow(tipo, s, pid, tipoLabel) {
    var T = tipoInfo(tipo);
    var r = slotReceta(tipo, s);
    var p = pdata(r, pid);
    var tot = totales(p);
    var name = r ? nombre(r, pid) : s.texto;
    var nameHtml = r && r.color ? '<span class="dish" style="' + dishStyle(r) + '">' + esc(name) + "</span>" : esc(name);
    var attrs = r && p ? ' data-open="' + tipo + "/" + esc(r.id) + '"' : " disabled";
    return '<button type="button" class="meal-row"' + attrs + ">" +
      '<span class="meal-ico">' + svg(tipo) + "</span>" +
      '<span><span class="meal-type">' + esc(tipoLabel || T.singular) + "</span>" +
      '<span class="meal-name' + (tot ? "" : " nodata") + '">' + nameHtml + "</span></span>" +
      '<span class="meal-kcal">' + (tot ? "<b>" + k0(tot.kcal) + "</b>kcal" : '<span class="sd">sin datos</span>') + "</span></button>";
  }

  /* ================= BARRAS ================= */
  function renderTopbar() {
    document.getElementById("personSeg").innerHTML = personSeg();
  }
  function renderTabbar() {
    document.getElementById("tabbar").innerHTML = TABS.map(function (t) {
      var on = t.id === state.tab;
      return '<button type="button" class="tab-btn' + (on ? " active" : "") + '" data-tab="' + t.id + '"' +
        (on ? ' aria-current="page"' : "") + '><span class="ico">' + svg(t.icon, on ? 2.1 : 1.8) +
        '</span><span class="lbl">' + t.label + "</span></button>";
    }).join("");
  }

  /* ================= MENÚ ================= */
  function renderMenu() {
    var pid = state.person;
    var ss = semanas();
    var h = '<div class="page-head"><h2 class="page-title">Menú</h2>';
    if (ss.length > 1) {
      h += '<div class="seg" role="radiogroup" aria-label="Semana del menú">' + ss.map(function (s, i) {
        return '<button type="button" role="radio" aria-checked="' + (i === state.week) + '" data-week="' + i + '">' + esc(s.nombre) + "</button>";
      }).join("") + "</div>";
    }
    h += "</div>";
    if (!ss.length) {
      main.innerHTML = h + '<div class="card empty"><h3>No hay menú</h3><p>Añade la pestaña MENU al Excel y vuelve a generar los datos.</p></div>';
      return;
    }

    var si = state.week, sem = ss[si];
    var today = todayIdx();
    var di = clamp(state.day, 0, sem.dias.length - 1);
    var dia = sem.dias[di];
    var tot = diaTotales(si, di, pid);
    var od = objetivoDiario(pid);
    var esHoy = di === today;

    // ---- Día seleccionado
    h += '<h2 class="section-title" id="dayTitle"><span>' + esc(dia.dia) + (esHoy ? '<span class="today">hoy</span>' : "") + "</span>" +
      (esHoy ? "" : '<button type="button" class="link-inline" data-action="today">Ver hoy</button>') + "</h2>";
    h += '<div class="card"><ul class="meals">' + TIPOS.map(function (t) {
      var s = slot(si, di, t.id);
      return s ? "<li>" + mealRow(t.id, s, pid) + "</li>" : "";
    }).join("") + "</ul></div>";

    var rows = [{
      energy: true,
      n: "Energía",
      v: "<b>" + k0(tot.kcal) + "</b><small>kcal</small>",
      t: od ? "≈" + k0(od.kcal) + " (" + k0(tot.kcal / od.kcal * 100) + " %)" : "—"
    }].concat(MACROS.map(function (m) {
      return {
        n: m.label,
        v: g1(tot[m.k]) + " g",
        t: od ? "≈" + k0(od[m.k]) + " (" + k0(tot[m.k] / od[m.k] * 100) + " %)" : "—"
      };
    }));
    var foot = "Objetivo diario de " + esc(personaNombre(pid)) + " según su pestaña de macros.";
    if (tot.sinDatos.length) {
      foot += " No incluye " + lista(tot.sinDatos.map(function (t) { return tipoInfo(t).el; })) + ": aún no tiene datos.";
    }
    h += etiqueta({
      aria: "Información nutricional del " + dia.dia.toLowerCase(),
      quien: "Total del día<br><b>" + esc(personaNombre(pid)) + "</b>",
      cols: ["Total", "Objetivo"],
      rows: rows,
      foot: foot
    });

    // ---- Semana completa
    h += '<h2 class="section-title"><span>' + esc(sem.nombre) + ", de lunes a domingo</span></h2>";
    var fijos = TIPOS.filter(function (t) {
      if (t.id === "comida" || t.id === "cena" || !sem.dias[0][t.id]) return false;
      var first = JSON.stringify(sem.dias[0][t.id]);
      return sem.dias.every(function (d) { return JSON.stringify(d[t.id] || null) === first; });
    });
    if (fijos.length) {
      h += '<div class="card everyday"><ul class="meals">' + fijos.map(function (t) {
        return "<li>" + mealRow(t.id, sem.dias[0][t.id], pid, t.singular + ", todos los días") + "</li>";
      }).join("") + "</ul></div>";
    }
    h += '<div class="week-head" aria-hidden="true"><span></span><span>Comida</span><span>Cena</span><span>kcal</span></div>';
    var sinMerienda = false;
    h += '<div class="week">' + sem.dias.map(function (d, i) {
      var t = diaTotales(si, i, pid);
      if (t.sinDatos.length) sinMerienda = true;
      function nameOf(tipo) {
        var s = d[tipo];
        if (!s) return null;
        var r = slotReceta(tipo, s);
        return r ? nombre(r, pid) : s.texto;
      }
      function cell(tipo) {
        var s = d[tipo];
        if (!s) return '<span class="tile plain">—</span>';
        var r = slotReceta(tipo, s);
        if (!r || !r.color) return '<span class="tile plain">' + esc(nameOf(tipo)) + "</span>";
        return '<span class="tile" style="' + dishStyle(r) + '">' + esc(nameOf(tipo)) + "</span>";
      }
      var aria = d.dia + (i === today ? " (hoy)" : "") + ": comida " + (nameOf("comida") || "nada") +
        ", cena " + (nameOf("cena") || "nada") + ", " + k0(t.kcal) + " kcal";
      return '<button type="button" class="week-row' + (i === di ? " selected" : "") + '" data-day="' + i +
        '" aria-pressed="' + (i === di) + '" aria-label="' + esc(aria) + '">' +
        '<span class="week-day">' + (LETRA[norm(d.dia)] || esc(d.dia.charAt(0))) + (i === today ? "<i></i>" : "") + "</span>" +
        cell("comida") + cell("cena") +
        '<span class="week-kcal">' + k0(t.kcal) + "<small>kcal</small></span></button>";
    }).join("") + "</div>";
    h += '<p class="note">Toca un día para ver su detalle. Cada plato lleva el color que tiene en el menú del Excel' +
      (sinMerienda ? "; las kcal no incluyen la merienda hasta que tenga datos." : ".") + "</p>";

    // ---- Objetivos
    h += renderObjetivos(pid);
    h += foot2();
    main.innerHTML = h;
  }

  function renderObjetivos(pid) {
    var o = (D.objetivos || {})[pid];
    if (!o) return "";
    var od = objetivoDiario(pid);
    var orden = ["desayuno", "almuerzo", "comida", "merienda", "cena", "total"];
    var h = '<h2 class="section-title"><span>Objetivos de macros</span></h2>';
    h += '<section class="label" aria-label="Objetivos de macros de ' + esc(personaNombre(pid)) + '">' +
      '<div class="label-head"><h3 class="label-title">Por toma</h3><span class="label-who">En gramos<br><b>' +
      esc(personaNombre(pid)) + "</b></span></div>" + '<div class="rule thick"></div>' +
      '<table class="targets"><thead><tr><th scope="col">Momento</th>' +
      MACROS.map(function (m) { return '<th scope="col">' + m.short + "</th>"; }).join("") +
      '<th scope="col">% kcal</th></tr></thead><tbody>';
    orden.forEach(function (k) {
      var row = o[k];
      if (!row) return;
      h += '<tr><th scope="row">' + esc(k === "total" ? "Total diario" : row.etiqueta) + "</th>" +
        MACROS.map(function (m) { return "<td>" + (row[m.k] ? esc(row[m.k].texto) : "—") + "</td>"; }).join("") +
        "<td>" + (row.kcalPct ? esc(row.kcalPct.texto) : "—") + "</td></tr>";
    });
    h += "</tbody></table>" + '<div class="rule thick"></div>';
    if (od) {
      h += '<p class="label-foot">El total diario equivale a unas ' + k0(od.kcal) +
        " kcal (4 kcal por gramo de proteína o hidratos y 9 por gramo de grasa).</p>";
    }
    return h + "</section>";
  }

  function foot2() {
    if (!D.fuente) return "";
    var fecha = "";
    if (D.actualizado) {
      try {
        fecha = new Date(D.actualizado + "T12:00:00").toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
      } catch (e) { fecha = D.actualizado; }
    }
    return '<p class="foot">Datos sacados de ' + esc(D.fuente) + (fecha ? " el " + esc(fecha) : "") + ".</p>";
  }

  /* ================= PESTAÑAS DE RECETAS ================= */
  function goalCard(tipo, pid) {
    var T = tipoInfo(tipo);
    var o = objetivo(pid, tipo);
    if (!o) return "";
    var opcional = /opcional/i.test(o.etiqueta || "") ? " (opcional)" : "";
    return '<div class="card goal"><p class="goal-title">Objetivo de ' + esc(personaNombre(pid)) + " para " + T.el + opcional + "</p>" +
      '<div class="goal-items">' + MACROS.map(function (m) {
        var r = o[m.k];
        return "<span>" + m.short + " <b>" + (r ? esc(r.texto) + " g" : "—") + "</b></span>";
      }).join("") + (o.kcalPct ? "<span><b>" + esc(o.kcalPct.texto) + " %</b> de las kcal</span>" : "") + "</div></div>";
  }

  function renderTipo(tipo) {
    var T = tipoInfo(tipo);
    var pid = state.person;
    var list = recetas(tipo);
    var h = '<h2 class="page-title">' + T.plural + "</h2>" + goalCard(tipo, pid);

    if (!list.length) {
      var enMenu = [];
      semanas().forEach(function (s) {
        s.dias.forEach(function (d) {
          if (d[tipo] && d[tipo].texto && enMenu.indexOf(d[tipo].texto) < 0) enMenu.push(d[tipo].texto);
        });
      });
      h += '<div class="card empty"><div class="empty-ico">' + svg(tipo, 1.6) + "</div>" +
        "<h3>Todavía no hay " + T.plural.toLowerCase() + "</h3>" +
        (enMenu.length ? "<p>En el menú aparece «" + esc(enMenu.join("», «")) + "», pero aún sin cantidades.</p>" : "") +
        "<p>Cuando las añadas al Excel saldrán aquí con sus cantidades y macros, y sumarán en las kcal de cada día del menú.</p></div>";
      main.innerHTML = h + foot2();
      return;
    }

    h += '<div class="recipe-list">' + list.map(function (r) {
      var p = pdata(r, pid);
      var tot = totales(p);
      return '<button type="button" class="recipe-card" data-open="' + tipo + "/" + esc(r.id) + '">' +
        '<span class="rc-head"><span class="rc-name">' + (r.color
          ? '<span class="dish" style="' + dishStyle(r) + '">' + esc(nombre(r, pid)) + "</span>"
          : esc(nombre(r, pid))) + "</span>" + (r.opcion ? '<span class="rc-opt">' + esc(r.opcion) + "</span>" : "") + "</span>" +
        '<span class="rc-kcal">' + (tot ? "<b>" + k0(tot.kcal) + "</b>kcal" : "") + "</span>" +
        '<span class="rc-macros">' + (tot
          ? MACROS.map(function (m) { return "<span>" + m.short + " " + k0(tot[m.k]) + " g</span>"; }).join("")
          : "<span>Sin cantidades para " + esc(personaNombre(pid)) + "</span>") + "</span>" +
        '<span class="rc-when">' + apariciones(tipo, r.id).map(esc).join("<br>") + "</span></button>";
    }).join("") + "</div>";
    main.innerHTML = h + foot2();
  }

  /* ================= HOJA DE RECETA ================= */
  var sheet = document.getElementById("sheet");
  var backdrop = document.getElementById("backdrop");
  var sheetBody = document.getElementById("sheetBody");
  var lastFocus = null;

  function renderSheet() {
    if (!state.sheet) return;
    var tipo = state.sheet.tipo, T = tipoInfo(tipo);
    var r = receta(tipo, state.sheet.id);
    var pid = state.person;
    if (!r || !T) {
      document.getElementById("sheetKicker").innerHTML = "";
      sheetBody.innerHTML = '<p class="missing">No se ha encontrado esta receta.</p>';
      return;
    }
    var p = pdata(r, pid);
    var tot = totales(p);
    var o = objetivo(pid, tipo);
    var od = objetivoDiario(pid);

    document.getElementById("sheetKicker").innerHTML = svg(tipo) + "<span>" + T.singular +
      (r.opcion ? ", " + esc(r.opcion.toLowerCase()) : "") + "</span>";
    var h = '<h2 class="sheet-title" id="sheetTitle">' + (r.color
      ? '<span class="dish" style="' + dishStyle(r) + '">' + esc(nombre(r, pid)) + "</span>"
      : esc(nombre(r, pid))) + "</h2>";
    if (p && p.nota) h += '<p class="sheet-note">' + esc(p.nota) + "</p>";
    h += '<div class="sheet-person">' + personSeg() + "</div>";

    if (!p) {
      sheetBody.innerHTML = h + '<p class="missing">Esta receta no tiene cantidades para ' + esc(personaNombre(pid)) + ".</p>";
      return;
    }

    h += '<h3 class="section-title" style="margin-top:22px"><span>Ingredientes</span></h3>';
    h += '<ul class="card ing-list">' + (p.ingredientes || []).map(function (i) {
      var sub = "";
      if (typeof i.kcal === "number") {
        sub = '<div class="ing-sub"><span>' + k0(i.kcal) + " kcal</span>" + MACROS.map(function (m) {
          return typeof i[m.k] === "number" ? "<span>" + m.short + " " + g1(i[m.k]) + "</span>" : "";
        }).join("") + "</div>";
      }
      return '<li class="ing"><div class="ing-main"><span class="ing-name">' + esc(i.alimento) +
        (i.nota ? '<span class="tag">' + esc(i.nota) + "</span>" : "") + '</span><span class="ing-qty">' +
        esc(i.cantidad) + "</span></div>" + sub + "</li>";
    }).join("") + "</ul>";

    if (tot) {
      var share = od ? Math.round(tot.kcal / od.kcal * 100) : null;
      var rows = [{
        energy: true,
        n: "Energía",
        v: "<b>" + k0(tot.kcal) + "</b><small>kcal</small>",
        t: share != null ? (o && o.kcalPct ? stIcon(estadoRango(share, o.kcalPct)) : "") + share + " % del día" : "—"
      }].concat(MACROS.map(function (m) {
        var rg = o ? o[m.k] : null;
        var v = Math.round(tot[m.k] * 10) / 10;
        return { n: m.label, v: g1(v) + " g", t: rg ? stIcon(estadoRango(v, rg)) + esc(rg.texto) + " g" : "—" };
      }));
      var foot = "";
      if (o) {
        foot = "Objetivo de " + esc(personaNombre(pid)) + " para " + T.el;
        if (o.kcalPct && od) foot += ": " + esc(o.kcalPct.texto) + " % de las ≈" + k0(od.kcal) + " kcal del día";
        foot += ". ✓ dentro, ↑ por encima, ↓ por debajo.";
      }
      h += etiqueta({
        aria: "Información nutricional de " + nombre(r, pid),
        quien: "Por ración<br><b>" + esc(personaNombre(pid)) + "</b>",
        cols: ["Cantidad", "Objetivo"],
        rows: rows,
        foot: foot
      });
    }

    h += '<p class="when"><b>En el menú</b><br>' + apariciones(tipo, r.id).map(esc).join("<br>") + "</p>";
    sheetBody.innerHTML = h;
  }

  function hashFor(tab, tipo, id) { return "#" + tab + (tipo ? "/" + tipo + "/" + id : ""); }
  function parseHash() {
    var parts = decodeURIComponent(location.hash.replace(/^#/, "")).split("/");
    var res = { tab: tabInfo(parts[0]) ? parts[0] : null, sheet: null };
    if (parts.length >= 3 && tipoInfo(parts[1]) && receta(parts[1], parts[2])) res.sheet = { tipo: parts[1], id: parts[2] };
    return res;
  }

  function openSheet(tipo, id, fromHistory) {
    var wasOpen = !!state.sheet;
    state.sheet = { tipo: tipo, id: id };
    renderSheet();
    sheetBody.scrollTop = 0;
    if (!wasOpen) {
      lastFocus = document.activeElement;
      sheet.classList.remove("hidden");
      backdrop.classList.remove("hidden");
      void sheet.offsetHeight; // reflow para que se vea la animación
      sheet.classList.add("open");
      backdrop.classList.add("open");
      document.documentElement.style.overflow = "hidden";
    }
    try { document.getElementById("sheetClose").focus({ preventScroll: true }); } catch (e) { /* noop */ }
    if (!fromHistory) {
      var url = hashFor(state.tab, tipo, id);
      if (wasOpen) history.replaceState({ sheet: true }, "", url);
      else history.pushState({ sheet: true }, "", url);
    }
  }

  function closeSheet(fromHistory) {
    if (!state.sheet) return;
    state.sheet = null;
    sheet.classList.remove("open");
    backdrop.classList.remove("open");
    sheet.style.transform = "";
    setTimeout(function () {
      if (!state.sheet) { sheet.classList.add("hidden"); backdrop.classList.add("hidden"); }
    }, reducedMotion() ? 0 : 280);
    document.documentElement.style.overflow = "";
    if (lastFocus && document.contains(lastFocus)) {
      try { lastFocus.focus({ preventScroll: true }); } catch (e) { /* noop */ }
    }
    if (!fromHistory) {
      if (history.state && history.state.sheet) history.back();
      else history.replaceState(null, "", hashFor(state.tab));
    }
  }

  document.getElementById("sheetClose").addEventListener("click", function () { closeSheet(false); });
  backdrop.addEventListener("click", function () { closeSheet(false); });
  document.addEventListener("keydown", function (e) {
    if (!state.sheet) return;
    if (e.key === "Escape") { e.preventDefault(); closeSheet(false); return; }
    if (e.key === "Tab") {
      var f = sheet.querySelectorAll("button:not([disabled])");
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // Arrastrar hacia abajo desde la parte de arriba de la hoja para cerrarla.
  (function () {
    var top = sheet.querySelector(".sheet-top");
    var y0 = null, dy = 0;
    top.addEventListener("touchstart", function (e) { y0 = e.touches[0].clientY; dy = 0; sheet.style.transition = "none"; }, { passive: true });
    top.addEventListener("touchmove", function (e) {
      if (y0 == null) return;
      dy = Math.max(0, e.touches[0].clientY - y0);
      sheet.style.transform = "translateY(" + dy + "px)";
    }, { passive: true });
    top.addEventListener("touchend", function () {
      sheet.style.transition = "";
      if (dy > 90) closeSheet(false); else sheet.style.transform = "";
      y0 = null;
    });
  })();

  /* ================= NAVEGACIÓN ================= */
  function render() {
    renderTopbar();
    renderTabbar();
    if (state.tab === "menu") renderMenu();
    else renderTipo(tabInfo(state.tab).tipo);
    if (state.sheet) renderSheet();
  }

  function setTab(t) {
    if (!tabInfo(t)) return;
    if (state.sheet) closeSheet(true);
    state.tab = t;
    save(KEYS.tab, t);
    history.replaceState(null, "", hashFor(t));
    render();
    window.scrollTo(0, 0);
  }

  document.addEventListener("click", function (e) {
    var el = e.target.closest("button");
    if (!el || el.disabled) return;
    var ds = el.dataset;
    if (ds.tab) { setTab(ds.tab); return; }
    if (ds.person) {
      if (ds.person !== state.person) { state.person = ds.person; save(KEYS.person, ds.person); render(); }
      return;
    }
    if (ds.week != null) {
      state.week = parseInt(ds.week, 10) || 0;
      save(KEYS.week, state.week);
      render();
      return;
    }
    if (ds.day != null) {
      state.day = parseInt(ds.day, 10) || 0;
      render();
      var t = document.getElementById("dayTitle");
      if (t) {
        var y = t.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo({ top: Math.max(0, y), behavior: reducedMotion() ? "auto" : "smooth" });
      }
      return;
    }
    if (ds.action === "today") { state.day = todayIdx(); render(); return; }
    if (ds.open) {
      var parts = ds.open.split("/");
      openSheet(parts[0], parts[1], false);
    }
  });

  window.addEventListener("popstate", function () {
    var h = parseHash();
    if (h.tab && h.tab !== state.tab) { state.tab = h.tab; save(KEYS.tab, h.tab); render(); }
    if (h.sheet) openSheet(h.sheet.tipo, h.sheet.id, true);
    else closeSheet(true);
  });

  /* ================= TEMA ================= */
  function isDark() {
    var t = document.documentElement.getAttribute("data-theme");
    if (t) return t === "dark";
    return !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
  }
  function applyThemeColor() {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", isDark() ? "#111310" : "#ECEEE8");
  }
  document.getElementById("themeToggle").addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    save(KEYS.theme, next);
    applyThemeColor();
  });
  if (window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    if (mq.addEventListener) mq.addEventListener("change", applyThemeColor);
  }

  /* ================= ARRANQUE ================= */
  var inicial = parseHash();
  if (inicial.tab) { state.tab = inicial.tab; save(KEYS.tab, state.tab); }
  history.replaceState(null, "", hashFor(state.tab));
  applyThemeColor();
  render();
  if (inicial.sheet) openSheet(inicial.sheet.tipo, inicial.sheet.id, false);

  // Si la app se queda abierta y cambia el día, "hoy" se actualiza al volver.
  var ultimoDia = todayIdx();
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible" && todayIdx() !== ultimoDia) {
      ultimoDia = state.day = todayIdx();
      render();
    }
  });

  if ("serviceWorker" in navigator && location.protocol === "https:") {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("./sw.js").catch(function () { /* sin modo offline */ });
    });
  }
})();
