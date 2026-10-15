/* Bangarpet PaniPuri — UI upgrade. Drop-in replacement: same class names, no HTML/JS changes needed. */
:root {
  --ink: #12281f;
  --ink-soft: #2c4a3e;
  --ink-deep: #0b1b14;
  --cream: #faf6ee;
  --paper: #fffdf9;
  --sand: #e9dfcc;
  --terracotta: #d2643a;
  --terracotta-dark: #b44f2a;
  --gold: #e0ad4c;
  --muted: #667066;
  --ring: rgba(18, 40, 31, .1);
  --shadow: 0 24px 60px -18px rgba(18, 40, 31, .28);
  --shadow-sm: 0 8px 24px -10px rgba(18, 40, 31, .2);
  --display: "Playfair Display", Georgia, serif;
  --body: "DM Sans", Arial, sans-serif;
  --ease: cubic-bezier(.22, .61, .36, 1);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; scroll-padding-top: 96px; }
body { margin: 0; color: var(--ink); background: var(--cream); font-family: var(--body); line-height: 1.65; -webkit-font-smoothing: antialiased; }
a { color: inherit; text-decoration: none; }
img { display: block; width: 100%; }
::selection { background: var(--terracotta); color: #fff; }
.container { width: min(1160px, calc(100% - 48px)); margin: 0 auto; }
.sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; }
h1, h2, h3, p { margin-top: 0; }
h1, h2, h3 { font-family: var(--display); line-height: 1.1; }

/* ---------- Header: floating glass bar ---------- */
.site-header { position: sticky; top: 0; z-index: 50; padding: 12px 0; background: transparent; pointer-events: none; }
.nav-wrap { pointer-events: auto; min-height: 68px; display: flex; align-items: center; gap: 24px; padding: 6px 12px 6px 18px; border-radius: 999px; background: rgba(255, 253, 249, .78); border: 1px solid rgba(255,255,255,.7); box-shadow: 0 10px 40px -12px rgba(18,40,31,.25); backdrop-filter: blur(18px) saturate(1.4); -webkit-backdrop-filter: blur(18px) saturate(1.4); }
.brand { display: inline-flex; align-items: center; gap: 10px; font-family: var(--display); font-size: 19px; font-weight: 700; white-space: nowrap; letter-spacing: -.01em; }
.brand-mark { width: 56px; height: 56px; object-fit: contain; flex-shrink: 0; }
.site-nav { display: flex; align-items: center; gap: 30px; margin-left: auto; font-size: 14px; font-weight: 600; }
.site-nav a { position: relative; padding: 6px 0; color: var(--ink-soft); transition: color .2s var(--ease); }
.site-nav a::after { content: ""; position: absolute; bottom: 0; left: 0; width: 100%; height: 2px; border-radius: 2px; background: var(--terracotta); transform: scaleX(0); transform-origin: left; transition: transform .3s var(--ease); }
.site-nav a:hover { color: var(--ink); }
.site-nav a:hover::after { transform: scaleX(1); }
.nav-actions { display: flex; gap: 8px; align-items: center; }
.whatsapp-link, .call-link { font-size: 13px; font-weight: 700; padding: 11px 18px; border-radius: 999px; border: 1px solid var(--ring); transition: transform .2s var(--ease), background .2s, box-shadow .2s; }
.whatsapp-link:hover { background: #fff; transform: translateY(-1px); }
.call-link { color: #fff; border-color: transparent; background: linear-gradient(135deg, var(--ink-soft), var(--ink)); }
.call-link:hover { transform: translateY(-1px); box-shadow: var(--shadow-sm); }
.menu-toggle { display: none; margin-left: auto; border: 0; background: transparent; padding: 8px; cursor: pointer; }
.menu-toggle span:not(.sr-only) { display: block; width: 22px; height: 2px; margin: 4px 0; border-radius: 2px; background: var(--ink); }

/* ---------- Hero ---------- */
.hero { min-height: 100svh; margin-top: -92px; position: relative; isolation: isolate; display: grid; align-items: center; overflow: hidden; color: #fff; }
.hero-video { position: absolute; inset: 0; z-index: -2; width: 100%; height: 100%; object-fit: cover; transform: scale(1.04); }
.hero-overlay { position: absolute; inset: 0; z-index: -1; background:
  radial-gradient(80% 70% at 18% 55%, rgba(8,22,15,.82), transparent 70%),
  linear-gradient(180deg, rgba(8,22,15,.55) 0%, rgba(8,22,15,.15) 40%, rgba(8,22,15,.75) 100%); }
.hero-content { max-width: 780px; padding: 150px 0 110px; }
.eyebrow { display: inline-block; margin: 0 0 16px; color: var(--terracotta); font-size: 12px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; }
.eyebrow.light { padding: 8px 16px; color: #f6d89a; border-radius: 999px; border: 1px solid rgba(246,216,154,.35); background: rgba(255,255,255,.08); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); letter-spacing: .16em; }
h1 { margin-bottom: 24px; font-size: clamp(38px, 6vw, 72px); letter-spacing: -.035em; text-wrap: balance; }
h1 em { color: #f6c978; font-style: italic; }
.hero-copy { max-width: 520px; font-size: 17px; color: rgba(255,255,255,.88); }
.hero-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 36px; }

@keyframes heroFadeUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: none; } }
@keyframes heroSlideLeft { from { opacity: 0; transform: translateX(-48px); } to { opacity: 1; transform: none; } }
.hero-anim { opacity: 0; animation: heroFadeUp 1.1s var(--ease) forwards; animation-delay: var(--delay); }
.hero-copy.hero-anim { animation-name: heroSlideLeft; animation-duration: .9s; }
@media (prefers-reduced-motion: reduce) { .hero-anim { animation: none; opacity: 1; } html { scroll-behavior: auto; } }

.btn { display: inline-flex; justify-content: center; align-items: center; padding: 16px 28px; border-radius: 999px; font-size: 15px; font-weight: 700; transition: transform .25s var(--ease), box-shadow .25s, background .2s; }
.btn:hover { transform: translateY(-3px); box-shadow: var(--shadow); }
.btn-primary { background: linear-gradient(135deg, #e0764a, var(--terracotta-dark)); color: #fff; box-shadow: 0 10px 30px -8px rgba(210,100,58,.7); }
.btn-light { background: rgba(255,255,255,.14); color: #fff; border: 1px solid rgba(255,255,255,.4); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
.btn-light:hover { background: #fff; color: var(--ink); }

/* ---------- Intro strip ---------- */
.intro-strip { position: relative; z-index: 2; margin-top: -48px; }
.intro-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; padding: 0; border-radius: 24px; overflow: hidden; background: var(--ink); color: #fff; box-shadow: var(--shadow); }
.intro-grid p { margin: 0; padding: 28px 32px; border-left: 1px solid rgba(255,255,255,.12); transition: background .3s; }
.intro-grid p:first-child { border-left: 0; }
.intro-grid p:hover { background: var(--ink-soft); }
.intro-grid strong, .intro-grid span { display: block; }
.intro-grid strong { font-family: var(--display); font-size: 20px; color: #f6d89a; }
.intro-grid span { margin-top: 4px; color: rgba(255,255,255,.72); font-size: 14px; }

/* ---------- Sections ---------- */
.section { padding: 120px 0; }
.section-head { max-width: 720px; margin: 0 auto 48px; }
.centered { text-align: center; }
h2 { margin-bottom: 20px; font-size: clamp(36px, 5vw, 60px); letter-spacing: -.04em; text-wrap: balance; }

/* ---------- Menu ---------- */
.menu-section { background: linear-gradient(180deg, #f3ebdb, #efe5d1); }
.menu-tabs { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; width: fit-content; margin: 0 auto 40px; padding: 6px; border-radius: 999px; background: rgba(255,253,249,.8); border: 1px solid var(--ring); box-shadow: var(--shadow-sm); }
.menu-tab { padding: 11px 26px; border: 0; border-radius: 999px; background: transparent; color: var(--ink-soft); font-family: var(--body); font-size: 14px; font-weight: 700; cursor: pointer; transition: background .25s var(--ease), color .25s; }
.menu-tab:hover { color: var(--terracotta); }
.menu-tab.active, .menu-tab.active:hover { background: var(--ink); color: #fff; }
.menu-quote { max-width: 640px; margin: 0 auto 52px; padding: 24px 32px; border: 0; border-radius: 20px; background: var(--paper); box-shadow: var(--shadow-sm); position: relative; font-family: var(--display); font-size: 21px; font-style: italic; color: var(--ink); text-align: center; }
.menu-quote::before { content: ""; position: absolute; left: 50%; top: 0; width: 56px; height: 4px; border-radius: 0 0 4px 4px; transform: translateX(-50%); background: var(--terracotta); }
.menu-items-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 22px; }
.menu-item-card { padding: 18px; border-radius: 22px; background: var(--paper); border: 1px solid rgba(233,223,204,.9); box-shadow: 0 6px 20px -10px rgba(18,40,31,.18); transition: transform .35s var(--ease), box-shadow .35s var(--ease), border-color .35s; }
.menu-item-card:hover { transform: translateY(-5px); box-shadow: var(--shadow); border-color: rgba(210,100,58,.35); }
.menu-item-wrapper { display: flex; gap: 18px; align-items: flex-start; }
.menu-item-wrapper img { width: 112px; height: 112px; object-fit: cover; border-radius: 16px; flex-shrink: 0; transition: transform .5s var(--ease); }
.menu-item-card:hover .menu-item-wrapper img { transform: scale(1.06) rotate(-1.5deg); }
.menu-item-content { flex: 1; min-width: 0; }
.menu-item-header { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; margin-bottom: 8px; flex-wrap: wrap; }
.menu-item-header h3 { margin: 0; font-size: 19px; line-height: 1.25; }
.menu-item-price { flex-shrink: 0; padding: 3px 12px; border-radius: 999px; background: rgba(210,100,58,.12); font-family: var(--display); font-size: 16px; font-weight: 700; color: var(--terracotta-dark); }
.menu-item-ingredients { margin: 0; color: var(--muted); font-size: 12.5px; line-height: 1.65; }
.menu-item-card.hidden { display: none; }
.menu-empty-state { display: none; max-width: 480px; margin: 12px auto 0; padding: 24px 30px; border: 1.5px dashed var(--terracotta); border-radius: 20px; background: var(--paper); color: var(--ink-soft); font-family: var(--display); font-size: 19px; font-style: italic; text-align: center; }
.menu-empty-state.visible { display: block; }

/* ---------- Story ---------- */
.story-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 96px; align-items: center; }
.story-image { position: relative; margin: 0; }
.story-image::before { content: ""; position: absolute; inset: 24px -24px -24px 24px; z-index: -1; border-radius: 160px 160px 28px 28px; background: linear-gradient(160deg, var(--gold), var(--terracotta)); opacity: .35; }
.story-image { z-index: 0; isolation: isolate; }
.story-image img { min-height: 580px; object-fit: cover; border-radius: 160px 160px 28px 28px; box-shadow: var(--shadow); }
.story-copy p:not(.eyebrow) { color: var(--muted); font-size: 18px; }

/* ---------- Contact ---------- */
.contact-section { padding-top: 90px; background: var(--paper); }
.contact-card { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; padding: 64px; border-radius: 36px; color: #fff; background: radial-gradient(90% 120% at 100% 0%, var(--ink-soft), var(--ink) 60%, var(--ink-deep)); box-shadow: var(--shadow); width: min(1160px, calc(100% - 48px)); }
.contact-card .eyebrow { color: #f6d89a; }
.contact-card > div > p:not(.eyebrow) { color: rgba(255,255,255,.76); font-size: 17px; }
.contact-actions { display: grid; gap: 12px; }
.contact-actions a { display: flex; justify-content: space-between; gap: 16px; align-items: center; padding: 20px 24px; border-radius: 18px; background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.14); transition: transform .25s var(--ease), background .25s, border-color .25s; }
.contact-actions a:hover { transform: translateX(6px); background: rgba(255,255,255,.14); border-color: rgba(246,216,154,.6); }
.contact-actions span { color: rgba(255,255,255,.65); font-size: 13px; }
.contact-actions strong { font-size: 16px; word-break: break-word; text-align: right; }

/* ---------- Footer ---------- */
.site-footer { padding: 44px 0; color: rgba(255,255,255,.72); background: var(--ink-deep); }
.footer-wrap { display: grid; grid-template-columns: 1fr auto; gap: 30px; align-items: center; }
.footer-wrap p { margin: 10px 0 0; font-size: 13px; }
.footer-links { display: flex; flex-wrap: wrap; gap: 24px; font-size: 14px; font-weight: 600; }
.footer-links a { transition: color .2s; }
.footer-links a:hover { color: #f6d89a; }
.copyright { grid-column: 1 / -1; padding-top: 22px; border-top: 1px solid rgba(255,255,255,.12); }

/* ---------- Grand opening video ---------- */
.grand-opening { position: fixed; inset: 0; z-index: 99999; display: flex; align-items: center; justify-content: center; background: #000; opacity: 1; visibility: visible; transition: opacity .7s ease, visibility .7s ease; }
.grand-opening video { width: 100%; height: 100%; object-fit: cover; }
.grand-opening.hide { opacity: 0; visibility: hidden; pointer-events: none; }

/* ---------- Responsive ---------- */
@media (max-width: 900px) {
  .container, .contact-card { width: min(100% - 32px, 1160px); }
  .menu-toggle { display: block; }
  .site-nav { display: none; position: absolute; left: 0; right: 0; top: calc(100% + 10px); padding: 20px 28px; border-radius: 24px; background: rgba(255,253,249,.97); box-shadow: var(--shadow); flex-direction: column; align-items: flex-start; gap: 18px; pointer-events: auto; }
  .site-nav.open { display: flex; }
  .nav-actions { margin-left: auto; }
  .nav-wrap { position: relative; }
  .intro-grid, .story-grid, .contact-card { grid-template-columns: 1fr; }
  .intro-grid p { border-left: 0; border-top: 1px solid rgba(255,255,255,.12); padding: 22px 26px; }
  .intro-grid p:first-child { border-top: 0; }
  .section { padding: 80px 0; }
  .story-grid { gap: 56px; }
  .story-image::before { inset: 16px -12px -16px 12px; }
  .story-image img { min-height: 400px; }
  .contact-card { gap: 36px; padding: 36px 24px; border-radius: 28px; }
  .footer-wrap { grid-template-columns: 1fr; }
  .menu-items-grid { grid-template-columns: 1fr; }
}
@media (max-width: 520px) {
  .brand { font-size: 16px; }
  .brand-mark { width: 44px; height: 44px; }
  .whatsapp-link { display: none; }
  .hero-content { padding: 130px 0 90px; }
  .hero-copy { font-size: 16px; }
  .btn { padding: 14px 22px; }
  .menu-tab { padding: 9px 16px; font-size: 13px; }
  .menu-quote { font-size: 17px; padding: 20px 20px; }
  .menu-item-wrapper img { width: 88px; height: 88px; }
  .contact-actions strong { text-align: left; font-size: 14px; }
  .contact-actions a { flex-direction: column; align-items: flex-start; gap: 4px; }
}
