(async () => {
  const base = new URL('.', document.currentScript.src);
  const r = await fetch(new URL('content-profile-2026.json', base));
  if (!r.ok) return;
  const p = await r.json();
  const q = s => document.querySelector(s);
  const qa = s => [...document.querySelectorAll(s)];
  const text = (s,v) => { const e=q(s); if(e) e.textContent=v; };
  const html = (s,v) => { const e=q(s); if(e) e.innerHTML=v; };

  document.title = p.title;
  const nav = qa('.main-nav a');
  if (nav[0]) { nav[0].textContent='About'; nav[0].href='#about'; }
  if (nav[1]) { nav[1].textContent='Business Sectors'; nav[1].href='#services'; }
  if (nav[2]) { nav[2].textContent='Automotive'; nav[2].href='#products'; }
  if (nav[3]) { nav[3].textContent='Leadership'; nav[3].href='#leadership'; }

  html('.hero .eyebrow', '<span></span> ' + p.hero.eyebrow);
  html('#hero-title', 'Building Partnerships.<br><em>Delivering Quality.</em><br>Creating Value.');
  text('.hero-lead', p.hero.lead);
  html('.hero-actions .button:first-child', 'Partner with us <span>↗</span>');
  html('.hero-actions .button:nth-child(2)', 'Explore our sectors <span>↓</span>');
  html('.hero-proof', p.hero.proof.map(x => { const [a,...b]=x.split(' · '); return `<div><strong>${a}</strong><span>${b.join(' · ')}</span></div>`; }).join(''));
  html('.floating-note.note-a', '<span>01</span> Understand');
  html('.floating-note.note-b', '<span>02</span> Source');
  html('.floating-note.note-c', '<span>03</span> Deliver');
  html('.ticker-track', '<span>FOOD & BEVERAGE</span><b>◆</b><span>AUTOMOTIVE</span><b>◆</b><span>TYRES</span><b>◆</b><span>BATTERIES & LUBRICANTS</span><b>◆</b><span>BUILDING MATERIALS</span><b>◆</b><span>COSMETICS</span><b>◆</b><span>IMPORT & EXPORT</span><b>◆</b><span>GENERAL TRADING</span><b>◆</b><span>PROJECT SERVICES</span><b>◆</b><span>TENDERS</span><b>◆</b>'.repeat(2));

  text('#about .section-kicker', '01 · About Premier Projects');
  html('#about h2', 'Diversified by design.<br><em>Built on dependable partnerships.</em>');
  text('#about .large-copy', p.about.lead);
  text('#about .about-aside p', p.about.summary);
  html('#about .about-aside .text-link', 'Explore our business sectors <span>↗</span>');
  const aboutLayout = q('#about .about-layout');
  if (aboutLayout && !q('.vm-grid')) {
    const vm = document.createElement('div');
    vm.className='vm-grid reveal visible';
    vm.innerHTML=`<article><span>VISION</span><h3>Our Vision</h3><p>${p.about.vision}</p></article><article><span>MISSION</span><h3>Our Mission</h3><p>${p.about.mission}</p></article>`;
    aboutLayout.after(vm);
  }
  qa('#about .values-strip article').forEach((card,i) => {
    if (!p.values[i]) return;
    const h3=card.querySelector('h3'), para=card.querySelector('p');
    if(h3) h3.textContent=p.values[i][0];
    if(para) para.textContent=p.values[i][1];
  });

  text('#services .section-kicker', '02 · Our Business Sectors');
  html('#services .section-head h2', 'Ten sectors.<br><em>One trusted business partner.</em>');
  text('#services .section-head > p', 'Our diversified portfolio allows us to support customers, contractors, institutions and projects through one integrated trading and services platform.');
  const grid=q('#services .service-grid');
  if(grid) {
    grid.classList.add('profile-grid');
    grid.innerHTML=p.sectors.map((s,i)=>`<article class="service-card reveal visible"><span class="service-index">${String(i+1).padStart(2,'0')}</span><div class="sector-glyph">◆</div><h3>${s[0]}</h3><p>${s[1]}</p></article>`).join('');
  }

  text('#products .section-kicker', '03 · Automotive, Tyres, Batteries & Lubricants');
  html('#products .section-head h2', 'International sourcing.<br><em>Automotive capability.</em>');
  text('#products .section-head > p', p.automotive.intro);
  html('#products .orbit-center', '<div class="center-label">AUTO</div><span>China · India<br>Thailand · Global</span>');
  qa('#products .product-chip').forEach((chip,i)=>{ if(p.automotive.brands[i]) chip.innerHTML=`<span>${p.automotive.brands[i][0]}</span>${p.automotive.brands[i][1]}`; });
  qa('#products .product-mobile span').forEach((chip,i)=>{ if(p.automotive.brands[i]) chip.textContent=`${p.automotive.brands[i][1]} · ${p.automotive.brands[i][0]}`; });
  let disclaimer=q('#products .brand-disclaimer');
  if(!disclaimer){ disclaimer=document.createElement('div'); disclaimer.className='section-shell brand-disclaimer'; q('#products')?.appendChild(disclaimer); }
  disclaimer.textContent='Selected tyre sourcing includes RODOEO, LONGMARCH, HILO and LONGWAY from China and RALSON and ALLIGATOR from India. The portfolio can be expanded based on customer requirements, vehicle applications, market demand and current supplier availability.';

  const leadership=q('.horeca');
  if(leadership) leadership.id='leadership';
  const panel=q('.horeca-panel');
  if(panel) panel.innerHTML=`<div class="section-kicker gold">04 · Leadership</div><h2>${p.leadership.name}</h2><p class="leader-role">${p.leadership.role}</p><p>${p.leadership.body1}</p><p>${p.leadership.body2}</p><div class="horeca-tags"><span>Diversification</span><span>International Sourcing</span><span>Partnerships</span><span>Long-term Value</span></div>`;
  html('.horeca-quote', `<div class="quote-mark">“</div><blockquote>${p.group.body}</blockquote><div class="quote-rule"></div><span>Our Group · ${p.group.title}</span>`);

  text('#process .section-kicker', '05 · Our Business Approach');
  html('#process .section-head h2', 'Understand. Source. Deliver.<br><em>Support. Grow.</em>');
  text('#process .section-head > p', 'Successful trading is more than supplying products—it is about creating dependable business relationships.');
  qa('#process .process-step').forEach((step,i)=>{
    if(p.approach[i]) {
      step.style.display='';
      const b=step.querySelector('b'),h=step.querySelector('h3'),para=step.querySelector('p');
      if(b)b.textContent=String(i+1).padStart(2,'0');
      if(h)h.textContent=p.approach[i][0];
      if(para)para.textContent=p.approach[i][1];
    } else step.style.display='none';
  });

  if(q('.global')) {
    text('.global .section-kicker', '06 · Our Market & Future Direction');
    html('.global h2', 'Qatar based.<br><em>Internationally connected.</em>');
    text('.global .global-copy > p', p.future);
    html('.global .factor-list', p.market.map(x=>`<span>${x}</span>`).join(''));
    const copy=q('.global .global-copy');
    if(copy && !q('.future-note')) {
      const f=document.createElement('div');
      f.className='future-note';
      f.innerHTML='<strong>International sourcing focus</strong><span>China · India · Thailand · Middle East · International Markets</span>';
      copy.appendChild(f);
    }
  }

  html('.arabic-band h2', 'نبني الشراكات<br>ونقدم الجودة ونصنع القيمة');
  text('.arabic-band p', 'تأسست بريمير بروجيكتس لتجارة المواد الغذائية والخدمات في قطر عام 2026 كشركة شقيقة لبريمير لخدمات التموين، وتعمل في قطاعات متعددة تشمل الأغذية والمشروبات وقطع غيار السيارات والإطارات والبطاريات والزيوت ومواد البناء ومستحضرات التجميل والاستيراد والتصدير والتجارة العامة وخدمات المشاريع والمناقصات.');

  text('#contact .section-kicker', '07 · Partner With Us');
  html('#contact h2', 'Let us build a successful<br><em>business partnership together.</em>');
  text('#contact .contact-copy > p', p.partner);
  html('#contact select[name="service"]', p.services.map(x=>`<option>${x}</option>`).join(''));
  const ta=q('#contact textarea[name="message"]');
  if(ta) ta.placeholder='Tell us the product, service, specification, quantity, project requirement or delivery timeline...';
  text('.footer-brand > p', 'Quality Products. Reliable Supply. Professional Service.');

  const style=document.createElement('style');
  style.textContent=`
    .vm-grid{width:min(var(--max),calc(100% - 48px));margin:48px auto 0;display:grid;grid-template-columns:1fr 1fr;gap:16px;position:relative;z-index:2}
    .vm-grid article{padding:32px;border:1px solid var(--line);border-radius:18px;background:rgba(255,255,255,.45)}
    .vm-grid article span{font-size:10px;letter-spacing:.15em;color:var(--gold);font-weight:700}
    .vm-grid h3{font-family:"Manrope";font-size:22px;margin:14px 0 10px}.vm-grid p{margin:0;color:var(--muted);line-height:1.7;font-size:13px}
    .service-grid.profile-grid{grid-template-columns:repeat(2,1fr)}
    .service-grid.profile-grid .service-card{min-height:285px}.sector-glyph{font-size:19px;color:var(--gold-light);margin:54px 0 20px}
    .leader-role{color:var(--gold-light)!important;font-weight:700;text-transform:uppercase;letter-spacing:.11em;font-size:11px!important}
    .brand-disclaimer{margin-top:38px;max-width:900px;text-align:center;color:var(--muted);font-size:12px;line-height:1.7}
    .future-note{margin-top:28px;padding:18px 20px;border:1px solid var(--line);border-radius:14px;display:flex;flex-direction:column;gap:7px}.future-note strong{font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:var(--gold)}.future-note span{font-size:13px;color:var(--muted)}
    @media(max-width:760px){.vm-grid{width:calc(100% - 36px);grid-template-columns:1fr}.service-grid.profile-grid{grid-template-columns:1fr}.sector-glyph{margin-top:38px}}
  `;
  document.head.appendChild(style);
})();