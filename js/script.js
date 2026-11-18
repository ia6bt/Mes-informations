(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- Translations ---------- */
  var T = {
    en: {
      skip: "Skip to content", nav_about: "About", nav_skills: "Skills", nav_exp: "Experience", nav_projects: "Projects", nav_certs: "Certificates", nav_contact: "Contact",
      hero_kicker: "Kénitra, Morocco",
      hero_lead: "I run production machines by day and build web and Android projects by night. I care about quality, clean code and learning by making things.",
      cta_projects: "See my projects", cta_contact: "Contact me",
      about_h: "About me",
      about_p1: "I work in industrial production in Kénitra, where precision and consistent quality are part of every shift. Outside work, I teach myself programming and turn ideas into working tools.",
      about_p2: "I started with HTML, CSS and JavaScript, then added Python and Java. I also build Android apps with Sketchware Pro, often as WebView apps with local data storage.",
      about_p3: "My method is simple: pick a real problem, build a small working version, test it, and improve it. That is how my quality-control tool and my games came to life.",
      skills_h: "Skills", sk1_h: "Web", sk2_h: "Programming", sk3_h: "Mobile", sk4_h: "Data and tools",
      sk_front: "Frontend development", sk_android: "Android apps", sk_webview: "WebView apps", sk_storage: "Local data storage", sk_ui: "Application interfaces", sk_digital: "Computer and digital tools",
      exp_h: "Experience", exp_role: "Production operator, Machining department", exp_place: "Kénitra, Morocco", exp_time: "2 years in industrial production",
      exp1: "Operating and monitoring machining machines.", exp2: "Monitoring helium machines and adjusting their parameters.", exp3: "Monitoring the automatic balancing machine.",
      exp4: "Tracking quality issues and non-conformities.", exp5: "Controlling scrap and defects.", exp6: "Working across several production positions.",
      exp7: "Quality-related activities as part of my production work.",
      exp_award: "Certificate of Best Employee, Machining department (2026)",
      proj_h: "Projects", more: "Details",
      p1_d: "A quality-management web app to record VIS references, identify non-conforming items, organize inspection data and generate reports.",
      p1_1: "Record VIS references", p1_2: "Flag non-conforming items", p1_3: "Organize inspection data", p1_4: "Generate reports",
      p2_d: "A digital entertainment project about football content, media and sports information.", p2_1: "Football content", p2_2: "Media", p2_3: "Sports information",
      p3_d: "A Facebook video downloader application concept.", p3_1: "Concept stage: the idea and the interface design.",
      p4_d: "A 2D fighting game that runs in the browser, built with HTML, CSS and JavaScript and designed to work in the PlayStation 3 browser.",
      p4_1: "Plain HTML, CSS and JavaScript, no framework", p4_2: "Target: PlayStation 3 browser compatibility",
      t_football: "Football", t_media: "Media", t_concept: "Concept", t_download: "Video downloader",
      cert_h: "Certificates", c1_t: "Certificate of Best Employee", c1_s: "Machining department, CITIC DICASTAL, 2026", c2_t: "Sewing diploma", c2_s: "2019",
      cert_note: "Technical knowledge also comes from independent learning and practical projects.",
      contact_h: "Contact", contact_p: "Have a question or an opportunity? Write to me.", btn_wa: "WhatsApp", btn_mail: "Email",
      f_name: "Your name", f_email: "Your email", f_msg: "Message", f_send: "Send by email",
      e_name: "Enter your name (2 characters or more).", e_email: "Enter a valid email address, like name@example.com.", e_msg: "Write a message of at least 10 characters.",
      f_ok: "Your email app is opening with your message. Press send there to finish.",
      wa_text: "Hello Mohamed, I saw your portfolio.", rights: "All rights reserved.", totop: "Back to top",
      mail_subject: "Portfolio contact from "
    },
    fr: {
      skip: "Aller au contenu", nav_about: "À propos", nav_skills: "Compétences", nav_exp: "Expérience", nav_projects: "Projets", nav_certs: "Certificats", nav_contact: "Contact",
      hero_kicker: "Kénitra, Maroc",
      hero_lead: "Je fais tourner des machines de production la journée et je crée des projets web et Android le soir. J'aime la qualité, le code propre et apprendre en construisant.",
      cta_projects: "Voir mes projets", cta_contact: "Me contacter",
      about_h: "À propos de moi",
      about_p1: "Je travaille dans la production industrielle à Kénitra, où la précision et la qualité constante font partie de chaque poste. En dehors du travail, j'apprends la programmation seul et je transforme mes idées en outils fonctionnels.",
      about_p2: "J'ai commencé par HTML, CSS et JavaScript, puis j'ai ajouté Python et Java. Je crée aussi des applications Android avec Sketchware Pro, souvent des applications WebView avec stockage local des données.",
      about_p3: "Ma méthode est simple : choisir un vrai problème, construire une petite version qui fonctionne, la tester, puis l'améliorer. C'est ainsi que mon outil de contrôle qualité et mes jeux ont vu le jour.",
      skills_h: "Compétences", sk1_h: "Web", sk2_h: "Programmation", sk3_h: "Mobile", sk4_h: "Données et outils",
      sk_front: "Développement frontend", sk_android: "Applications Android", sk_webview: "Applications WebView", sk_storage: "Stockage local des données", sk_ui: "Interfaces d'application", sk_digital: "Outils informatiques et numériques",
      exp_h: "Expérience", exp_role: "Opérateur de production, département Machining", exp_place: "Kénitra, Maroc", exp_time: "2 ans en production industrielle",
      exp1: "Conduite et surveillance des machines d'usinage.", exp2: "Surveillance des machines à hélium et réglage de leurs paramètres.", exp3: "Surveillance de la machine d'équilibrage automatique.",
      exp4: "Suivi des problèmes de qualité et des non-conformités.", exp5: "Contrôle des rebuts et des défauts.", exp6: "Travail sur plusieurs postes de production.",
      exp7: "Activités liées à la qualité dans le cadre de mon travail en production.",
      exp_award: "Certificat du Meilleur Employé, département Machining (2026)",
      proj_h: "Projets", more: "Détails",
      p1_d: "Une application web de gestion de la qualité pour enregistrer les références VIS, identifier les articles non conformes, organiser les données d'inspection et générer des rapports.",
      p1_1: "Enregistrer les références VIS", p1_2: "Signaler les articles non conformes", p1_3: "Organiser les données d'inspection", p1_4: "Générer des rapports",
      p2_d: "Un projet de divertissement numérique autour du football : contenus, médias et informations sportives.", p2_1: "Contenus football", p2_2: "Médias", p2_3: "Informations sportives",
      p3_d: "Un concept d'application de téléchargement de vidéos Facebook.", p3_1: "Stade de concept : l'idée et la conception de l'interface.",
      p4_d: "Un jeu de combat 2D qui fonctionne dans le navigateur, développé en HTML, CSS et JavaScript et conçu pour fonctionner dans le navigateur de la PlayStation 3.",
      p4_1: "HTML, CSS et JavaScript purs, sans framework", p4_2: "Objectif : compatibilité avec le navigateur de la PlayStation 3",
      t_football: "Football", t_media: "Médias", t_concept: "Concept", t_download: "Téléchargeur de vidéos",
      cert_h: "Certificats", c1_t: "Certificat du Meilleur Employé", c1_s: "Département Machining, CITIC DICASTAL, 2026", c2_t: "Diplôme de couture", c2_s: "2019",
      cert_note: "Mes connaissances techniques viennent aussi de l'apprentissage autonome et de projets pratiques.",
      contact_h: "Contact", contact_p: "Une question ou une opportunité ? Écrivez-moi.", btn_wa: "WhatsApp", btn_mail: "E-mail",
      f_name: "Votre nom", f_email: "Votre e-mail", f_msg: "Message", f_send: "Envoyer par e-mail",
      e_name: "Entrez votre nom (2 caractères ou plus).", e_email: "Entrez une adresse e-mail valide, par exemple nom@exemple.com.", e_msg: "Écrivez un message d'au moins 10 caractères.",
      f_ok: "Votre application e-mail s'ouvre avec votre message. Appuyez sur envoyer pour terminer.",
      wa_text: "Bonjour Mohamed, j'ai vu votre portfolio.", rights: "Tous droits réservés.", totop: "Retour en haut",
      mail_subject: "Contact portfolio de "
    },
    ar: {
      skip: "انتقل إلى المحتوى", nav_about: "نبذة", nav_skills: "المهارات", nav_exp: "الخبرة", nav_projects: "المشاريع", nav_certs: "الشهادات", nav_contact: "اتصل بي",
      hero_kicker: "القنيطرة، المغرب",
      hero_lead: "أشغّل آلات الإنتاج نهارًا وأبني مشاريع الويب والأندرويد ليلًا. أهتم بالجودة والكود النظيف والتعلّم بالتجربة.",
      cta_projects: "شاهد مشاريعي", cta_contact: "تواصل معي",
      about_h: "نبذة عني",
      about_p1: "أعمل في الإنتاج الصناعي بالقنيطرة، حيث الدقة والجودة المستمرة جزء من كل وردية. وخارج العمل أتعلّم البرمجة ذاتيًا وأحوّل أفكاري إلى أدوات تعمل فعلًا.",
      about_p2: "بدأت بـ HTML وCSS وJavaScript، ثم أضفت Python وJava. كما أبني تطبيقات أندرويد باستخدام Sketchware Pro، وغالبًا تطبيقات WebView مع تخزين محلي للبيانات.",
      about_p3: "طريقتي بسيطة: أختار مشكلة حقيقية، وأبني نسخة صغيرة تعمل، وأختبرها ثم أحسّنها. بهذه الطريقة ظهرت أداة مراقبة الجودة وألعابي.",
      skills_h: "المهارات", sk1_h: "الويب", sk2_h: "البرمجة", sk3_h: "الهاتف المحمول", sk4_h: "البيانات والأدوات",
      sk_front: "تطوير الواجهات الأمامية", sk_android: "تطبيقات أندرويد", sk_webview: "تطبيقات WebView", sk_storage: "التخزين المحلي للبيانات", sk_ui: "واجهات التطبيقات", sk_digital: "الأدوات الحاسوبية والرقمية",
      exp_h: "الخبرة", exp_role: "مشغّل إنتاج، قسم التشغيل الآلي (Machining)", exp_place: "القنيطرة، المغرب", exp_time: "سنتان في الإنتاج الصناعي",
      exp1: "تشغيل ومراقبة آلات التشغيل الآلي.", exp2: "مراقبة آلات الهيليوم وضبط معاييرها.", exp3: "مراقبة آلة الموازنة الأوتوماتيكية.",
      exp4: "متابعة مشاكل الجودة وحالات عدم المطابقة.", exp5: "مراقبة المرفوضات والعيوب.", exp6: "العمل في عدة مناصب إنتاجية.",
      exp7: "أنشطة متعلقة بالجودة ضمن عملي في الإنتاج.",
      exp_award: "شهادة أفضل موظف، قسم Machining (2026)",
      proj_h: "المشاريع", more: "التفاصيل",
      p1_d: "تطبيق ويب لإدارة الجودة لتسجيل مراجع VIS وتحديد العناصر غير المطابقة وتنظيم بيانات الفحص وإنشاء التقارير.",
      p1_1: "تسجيل مراجع VIS", p1_2: "تحديد العناصر غير المطابقة", p1_3: "تنظيم بيانات الفحص", p1_4: "إنشاء التقارير",
      p2_d: "مشروع ترفيه رقمي حول كرة القدم: محتوى وإعلام ومعلومات رياضية.", p2_1: "محتوى كرة القدم", p2_2: "الإعلام", p2_3: "معلومات رياضية",
      p3_d: "فكرة تطبيق لتحميل فيديوهات فيسبوك.", p3_1: "مرحلة الفكرة: التصور وتصميم الواجهة.",
      p4_d: "لعبة قتال ثنائية الأبعاد تعمل في المتصفح، مبنية بـ HTML وCSS وJavaScript ومصمّمة لتعمل في متصفح PlayStation 3.",
      p4_1: "HTML وCSS وJavaScript خالصة بدون إطار عمل", p4_2: "الهدف: التوافق مع متصفح PlayStation 3",
      t_football: "كرة القدم", t_media: "إعلام", t_concept: "فكرة", t_download: "تحميل الفيديو",
      cert_h: "الشهادات", c1_t: "شهادة أفضل موظف", c1_s: "قسم Machining، CITIC DICASTAL، 2026", c2_t: "دبلوم الخياطة", c2_s: "2019",
      cert_note: "معرفتي التقنية تأتي أيضًا من التعلّم الذاتي والمشاريع العملية.",
      contact_h: "اتصل بي", contact_p: "لديك سؤال أو فرصة؟ راسلني.", btn_wa: "واتساب", btn_mail: "البريد",
      f_name: "اسمك", f_email: "بريدك الإلكتروني", f_msg: "الرسالة", f_send: "إرسال عبر البريد",
      e_name: "أدخل اسمك (حرفان على الأقل).", e_email: "أدخل بريدًا إلكترونيًا صحيحًا مثل name@example.com.", e_msg: "اكتب رسالة من 10 أحرف على الأقل.",
      f_ok: "يتم فتح تطبيق البريد مع رسالتك. اضغط إرسال هناك لإتمام العملية.",
      wa_text: "مرحبًا محمد، شاهدت موقعك الشخصي.", rights: "جميع الحقوق محفوظة.", totop: "العودة للأعلى",
      mail_subject: "رسالة من موقع المعرض الشخصي: "
    }
  };

  var lang = "en";
  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  function setLang(l) {
    if (!T[l]) l = "en";
    lang = l;
    var d = T[l], root = document.documentElement;
    root.lang = l; root.dir = l === "ar" ? "rtl" : "ltr";
    $$("[data-i18n]").forEach(function (el) { var v = d[el.getAttribute("data-i18n")]; if (v) el.textContent = v; });
    $$(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === l)); });
    $("#totop").setAttribute("aria-label", d.totop);
    $("#waBtn").href = "https://wa.me/212772692016?text=" + encodeURIComponent(d.wa_text);
    document.title = l === "ar" ? "محمد بوشلوش | مطوّر ومشغّل إنتاج" : l === "fr" ? "Mohamed Bouchlouch | Développeur et opérateur de production" : "Mohamed Bouchlouch | Developer & Production Operator";
    $$(".err").forEach(function (e) { e.textContent = ""; });
    $$("#form [aria-invalid]").forEach(function (i) { i.removeAttribute("aria-invalid"); });
    $("#f-status").textContent = "";
    store("lang", l);
  }
  $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); }); });

  /* ---------- Mobile nav ---------- */
  var burger = $("#burger"), nav = $("#nav");
  function closeNav() { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });
  $$("a", nav).forEach(function (a) { a.addEventListener("click", closeNav); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeNav(); });
  document.addEventListener("click", function (e) { if (!nav.contains(e.target) && !burger.contains(e.target)) closeNav(); });

  /* ---------- Active link + reveal ---------- */
  var links = $$("a", nav);
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id); });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(function (s) { spy.observe(s); });
    var rev = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); rev.unobserve(en.target); } });
    }, { threshold: 0.08 });
    $$(".reveal").forEach(function (s) { rev.observe(s); });
  } else {
    $$(".reveal").forEach(function (s) { s.classList.add("in"); });
  }

  /* ---------- Back to top ---------- */
  var totop = $("#totop");
  function onScroll() { totop.hidden = window.scrollY < 600; }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  totop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  /* ---------- Project details ---------- */
  $$(".more").forEach(function (b) {
    b.addEventListener("click", function () {
      var panel = b.nextElementSibling, open = b.getAttribute("aria-expanded") === "true";
      b.setAttribute("aria-expanded", String(!open));
      panel.hidden = open;
    });
  });

  /* ---------- Contact form (validates, then opens the email app) ---------- */
  var form = $("#form");
  function check(id, errId, msgKey, test) {
    var el = $(id), err = $(errId), ok = test(el.value.trim());
    el.setAttribute("aria-invalid", String(!ok));
    err.textContent = ok ? "" : T[lang][msgKey];
    return ok;
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var a = check("#f-name", "#e-name", "e_name", function (v) { return v.length >= 2; });
    var b = check("#f-email", "#e-email", "e_email", function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); });
    var c = check("#f-msg", "#e-msg", "e_msg", function (v) { return v.length >= 10; });
    if (!(a && b && c)) { var bad = $("#form [aria-invalid='true']"); if (bad) bad.focus(); return; }
    var n = $("#f-name").value.trim(), m = $("#f-email").value.trim(), t = $("#f-msg").value.trim();
    var body = t + "\n\n" + n + " <" + m + ">";
    window.location.href = "mailto:abwjdan502@gmail.com?subject=" + encodeURIComponent(T[lang].mail_subject + n) + "&body=" + encodeURIComponent(body);
    $("#f-status").textContent = T[lang].f_ok;
  });
  $$("#form input, #form textarea").forEach(function (el) {
    el.addEventListener("input", function () { if (el.getAttribute("aria-invalid") === "true") { el.removeAttribute("aria-invalid"); el.nextElementSibling.textContent = ""; } });
  });

  $("#year").textContent = new Date().getFullYear();
  setLang(load("lang") || "en");
})();
