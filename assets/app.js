/* ============================================================
   Renders window.SITE (data.js) into index.html.
   Handles EN/中文 toggle, dark mode, mobile nav, active section,
   stats strip, reveal-on-scroll, back-to-top.
   ============================================================ */
(function () {
  "use strict";
  var S = window.SITE;
  if (!S) return;

  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  // ---------- language ----------
  var lang;
  if (S.showLangToggle === false) {
    lang = S.defaultLang === "zh" ? "zh" : "en";
    document.getElementById("langToggle").style.display = "none";
  } else {
    lang = store.get("lang");
    if (lang !== "en" && lang !== "zh") {
      lang = S.defaultLang === "en" || S.defaultLang === "zh"
        ? S.defaultLang
        : ((navigator.language || "").toLowerCase().indexOf("zh") === 0 ? "zh" : "en");
    }
  }
  function t(v) {
    if (v == null) return "";
    if (typeof v === "string") return v;
    return v[lang] != null ? v[lang] : (v.en || "");
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  // ---------- icons ----------
  var ICON = {
    mail:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.9 10.9c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/></svg>',
    scholar:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3zm0 14.5L5 13.7V17c0 1.7 3.1 3 7 3s7-1.3 7-3v-3.3l-7 3.8z"/></svg>',
    orcid:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM8.3 17.2H6.8V8.7h1.5v8.5zm-.8-9.6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm10 9.6h-4.8V8.7h4.5c3 0 4.5 2 4.5 4.3 0 2.4-1.6 4.2-4.2 4.2zm-.3-7.1h-3v5.7h2.8c2 0 2.9-1.2 2.9-2.9 0-1.6-1-2.8-2.7-2.8z"/></svg>',
    linkedin:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 2H3.6A1.6 1.6 0 0 0 2 3.6v16.8A1.6 1.6 0 0 0 3.6 22h16.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 20.4 2zM8 19H5V9h3v10zM6.5 7.7a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4zM19 19h-3v-4.9c0-1.2 0-2.7-1.6-2.7s-1.9 1.3-1.9 2.6V19h-3V9h2.9v1.4a3.2 3.2 0 0 1 2.9-1.6c3 0 3.6 2 3.6 4.6V19z"/></svg>',
    file:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M9 13h6M9 17h6"/></svg>'
  };

  // research-interest icons (keyed by data.js `icon`)
  var RICON = {
    drop:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/></svg>',
    grid:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16M12 4v16"/></svg>',
    network: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="5" cy="12" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 11l10-4M7 13l10 4"/></svg>',
    dam:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M4 20V9l6-5v16M10 20h10v-5H10M4 20h16"/><path d="M13 12h4" stroke-linecap="round"/></svg>',
    dice:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="9" cy="9" r="1.2" fill="currentColor"/><circle cx="15" cy="15" r="1.2" fill="currentColor"/><circle cx="15" cy="9" r="1.2" fill="currentColor"/><circle cx="9" cy="15" r="1.2" fill="currentColor"/></svg>',
    nodes:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><circle cx="12" cy="13" r="2"/><path d="M12 7v4M10.5 14.5L6.5 16.5M13.5 14.5l4 2"/></svg>',
    chart:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 20h16M7 16V9M12 16V5M17 16v-6"/></svg>'
  };

  function linkButtons(primaryFirst) {
    var out = [];
    if (S.cvFile)   out.push({ href: S.cvFile, label: t(S.ui.downloadCV), icon: ICON.file, primary: true, ext: false });
    if (S.email)    out.push({ href: "mailto:" + S.email, label: primaryFirst ? t(S.ui.emailMe) : S.email, icon: ICON.mail });
    if (S.scholar)  out.push({ href: S.scholar,  label: "Google Scholar", icon: ICON.scholar,  ext: true });
    if (S.orcid)    out.push({ href: S.orcid,    label: "ORCID",          icon: ICON.orcid,    ext: true });
    if (S.github)   out.push({ href: S.github,   label: "GitHub",         icon: ICON.github,   ext: true });
    if (S.linkedin) out.push({ href: S.linkedin, label: "LinkedIn",       icon: ICON.linkedin, ext: true });
    return out.map(function (b) {
      var a = el("a", "btn" + (b.primary ? " btn-primary" : ""), b.icon + "<span>" + esc(b.label) + "</span>");
      a.href = b.href;
      if (b.ext) { a.target = "_blank"; a.rel = "noopener"; }
      return a;
    });
  }

  // ---------- derived stats ----------
  function isFirstAuthor(p) { return /^\s*<b>/.test(p.authors || ""); }
  function computeStats() {
    var pubs = (S.publications || []).filter(function (p) { return p.status === "published" || p.status === "accepted"; });
    var journals = {};
    pubs.forEach(function (p) {
      // language-independent: always read the English fields
      var note = (p.note && p.note.en) || "", venue = (p.venue && p.venue.en) || "";
      if (p.kind === "conference" || /abstract/i.test(note)) return;
      var v = venue.split(",")[0].trim();
      if (v) journals[v] = 1;
    });
    var out = [
      { n: pubs.length, l: S.ui.stats.publications },
      { n: pubs.filter(isFirstAuthor).length, l: S.ui.stats.firstAuthor },
      { n: Object.keys(journals).length, l: S.ui.stats.journals }
    ];
    if (S.hIndex) out.push({ n: S.hIndex, l: S.ui.stats.hIndex });
    if (S.citations) out.push({ n: S.citations, l: S.ui.stats.citations });
    return out;
  }

  // ---------- render ----------
  function render() {
    document.documentElement.lang = lang;
    document.title = t(S.name) + " · " + t(S.nameAlt);

    document.querySelectorAll("[data-bind]").forEach(function (n) { n.textContent = t(S[n.dataset.bind]); });
    document.querySelectorAll("[data-bind-html]").forEach(function (n) { n.innerHTML = t(S[n.dataset.bindHtml]); });
    document.querySelectorAll("[data-nav]").forEach(function (n) { n.textContent = t(S.ui.nav[n.dataset.nav]); });
    document.querySelectorAll("[data-ui]").forEach(function (n) { n.textContent = t(S.ui[n.dataset.ui]); });
    document.getElementById("langToggle").textContent = lang === "en" ? "中文" : "EN";

    // hero buttons
    var ha = document.getElementById("heroActions"); ha.innerHTML = "";
    linkButtons(true).forEach(function (a) { ha.appendChild(a); });

    // stats
    var st = document.getElementById("stats"); st.innerHTML = "";
    computeStats().forEach(function (s) {
      var d = el("div", "stat");
      d.appendChild(el("div", "stat-n", esc(s.n)));
      d.appendChild(el("div", "stat-l", esc(t(s.l))));
      st.appendChild(d);
    });

    // about
    var about = document.getElementById("aboutText"); about.innerHTML = "";
    t(S.about).split(/\n\s*\n/).forEach(function (p) { if (p.trim()) about.appendChild(el("p", null, esc(p.trim()))); });

    // interests
    var ig = document.getElementById("interests"); ig.innerHTML = "";
    (S.interests || []).forEach(function (i) {
      var li = el("li");
      li.appendChild(el("span", "interest-icon", RICON[i.icon] || RICON.chart));
      li.appendChild(el("span", null, esc(t(i))));
      ig.appendChild(li);
    });

    // publications
    var pl = document.getElementById("pubList"); pl.innerHTML = "";
    (S.publications || []).forEach(function (p) {
      var li = el("li", "st-" + (p.status || "prep"));
      li.appendChild(el("div", "pub-year", esc(p.year || "")));
      var body = el("div");
      var title = p.link
        ? '<a href="' + esc(p.link) + '" target="_blank" rel="noopener">' + esc(p.title) + "</a>"
        : esc(p.title);
      body.appendChild(el("p", "pub-title", title));
      if (p.authors) body.appendChild(el("p", "pub-authors", p.authors));
      body.appendChild(el("p", "pub-venue", "<em>" + esc(t(p.venue)) + "</em>"));
      var meta = el("div", "pub-meta");
      if (p.status) meta.appendChild(el("span", "status status-" + p.status, esc(t(S.ui.statusLabel[p.status]))));
      if (isFirstAuthor(p)) meta.appendChild(el("span", "first-author", esc(t(S.ui.firstAuthor))));
      if (t(p.note)) meta.appendChild(el("span", "pub-note", esc(t(p.note))));
      (p.tags || []).forEach(function (g) { meta.appendChild(el("span", "tag", esc(g))); });
      body.appendChild(meta);
      li.appendChild(body);
      pl.appendChild(li);
    });

    var wl = document.getElementById("wipList"); wl.innerHTML = "";
    (S.inProgress || []).forEach(function (w) { wl.appendChild(el("li", null, esc(t(w)))); });
    wl.previousElementSibling.style.display = (S.inProgress || []).length ? "" : "none";

    // timelines
    function timeline(id, items, roleKey) {
      var box = document.getElementById(id); box.innerHTML = "";
      (items || []).forEach(function (it) {
        var d = el("div", "tl-item");
        var period = it.period || "";
        if (lang === "zh") period = period.replace(/present/i, "至今");
        d.appendChild(el("div", "tl-period", esc(period)));
        d.appendChild(el("p", "tl-role", esc(t(it[roleKey]))));
        d.appendChild(el("p", "tl-org", esc(t(it.org))));
        if (t(it.desc)) d.appendChild(el("p", "tl-desc", esc(t(it.desc))));
        box.appendChild(d);
      });
    }
    timeline("expList", S.experience, "role");
    timeline("eduList", S.education, "degree");

    // skills
    var sk = document.getElementById("skillList"); sk.innerHTML = "";
    (S.skills || []).forEach(function (g) {
      var d = el("div", "skill-group");
      d.appendChild(el("h3", null, esc(t(g.group))));
      var chips = el("div", "skill-chips");
      (g.items || []).forEach(function (c) { chips.appendChild(el("span", "chip", esc(t(c)))); });
      d.appendChild(chips);
      sk.appendChild(d);
    });

    // service
    var sv = document.getElementById("serviceList"); sv.innerHTML = "";
    (S.service || []).forEach(function (s) { sv.appendChild(el("li", null, esc(t(s)))); });

    // contact
    var cl = document.getElementById("contactLinks"); cl.innerHTML = "";
    linkButtons(false).forEach(function (a) { cl.appendChild(a); });

    document.getElementById("year").textContent = new Date().getFullYear();
    armReveal();
  }

  document.getElementById("langToggle").addEventListener("click", function () {
    lang = lang === "en" ? "zh" : "en";
    store.set("lang", lang);
    render();
  });

  // ---------- theme ----------
  var theme = store.get("theme");
  if (theme === "dark" || theme === "light") document.documentElement.setAttribute("data-theme", theme);
  document.getElementById("themeToggle").addEventListener("click", function () {
    var cur = document.documentElement.getAttribute("data-theme");
    var sysDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var isDark = cur ? cur === "dark" : sysDark;
    var next = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    store.set("theme", next);
  });

  // ---------- mobile nav ----------
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { links.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
  });

  // ---------- active section highlight ----------
  var navAs = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
  var sections = navAs.map(function (a) { return document.querySelector(a.getAttribute("href")); }).filter(Boolean);
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        navAs.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id); });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(function (s) { io.observe(s); });
  }

  // ---------- reveal on scroll ----------
  var revealIO = null;
  function armReveal() {
    var targets = document.querySelectorAll(".section > .container > *, .pub-list > li, .interest-grid > li, .tl-item");
    if (!("IntersectionObserver" in window)) { targets.forEach(function (n) { n.classList.add("in"); }); return; }
    if (!revealIO) {
      revealIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); revealIO.unobserve(en.target); } });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    }
    targets.forEach(function (n) {
      if (n.classList.contains("in")) return;
      n.classList.add("reveal");
      revealIO.observe(n);
    });
  }

  // ---------- back to top ----------
  var toTop = document.getElementById("toTop");
  window.addEventListener("scroll", function () {
    toTop.classList.toggle("show", window.scrollY > 600);
  }, { passive: true });
  toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  render();
})();
