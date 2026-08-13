(async () => {
  const base = new URL('.', document.currentScript.src);
  const read = async (name) => {
    const r = await fetch(new URL(name, base));
    if (!r.ok) throw new Error(name);
    return r.json();
  };

  try {
    const [home, business, auto, chairman, flow, industry] = await Promise.all([
      read('content-home.json'), read('content-business.json'), read('content-automotive.json'),
      read('content-chairman.json'), read('content-process.json'), read('content-industries.json')
    ]);
    const q = (s) => document.querySelector(s);
    const qa = (s) => [...document.querySelectorAll(s)];
    const text = (s, v) => { const e=q(s); if(e) e.textContent=v; };
    const html = (s, v) => { const e=q(s); if(e) e.innerHTML=v; };

    document.title = home.title;
    text('.main-nav a:nth-child(2)', 'Business');
    text('.main-nav a:nth-child(3)', 'Automotive');
    html('.hero .eyebrow', '<span></span> ' + home.hero.eyebrow);
    html('#hero-title', 'Reliable trading.<br><em>Professional solutions.</em>');
    text('.hero-lead', home.hero.lead);
    html('.hero-actions .button:first-child', 'Request a quotation <span>↗</span>');
    html('.hero-actions .button:nth-child(2)', 'Explore our business <span>↓</span>');
    html('.hero-proof', home.hero.proof.map(x => { const [a,...b]=x.split(' · '); return `<div><strong>${a}</strong><span>${b.join(' · ')}</span></div>`; }).join(''));
    html('.floating-note.note-b', '<span>02</span> Procure');
    html('.floating-note.note-c', '<span>03</span> Supply');
    html('.ticker-track', '<span>AUTOMOTIVE PARTS</span><b>◆</b><span>TYRES</span><b>◆</b><span>FOOD PRODUCTS</span><b>◆</b><span>BUILDING MATERIALS</span><b>◆</b><span>IMPORT &amp; EXPORT</span><b>◆</b><span>TENDER SUPPLY</span><b>◆</b>'.repeat(2));

    html('#about h2', 'Building business through <em>trust</em> and <em>reliable supply.</em>');
    text('#about .large-copy', home.about.lead);
    text('#about .about-aside p', home.about.summary);
    qa('#about .values-strip article').forEach((card,i) => {
      if (!business.values[i]) return;
      const h3=card.querySelector('h3'), p=card.querySelector('p');
      if(h3) h3.textContent=business.values[i][0];
      if(p) p.textContent=business.values[i][1];
    });

    text('#services .section-kicker', '02 · Products & Services');
    html('#services .section-head h2', 'One company.<br><em>Multiple supply solutions.</em>');
    text('#services .section-head > p', business.serviceIntro);
    qa('#services .service-card').forEach((card,i) => {
      if (!business.services[i]) return;
      const h3=card.querySelector('h3'), p=card.querySelector('p');
      if(h3) h3.textContent=business.services[i][0];
      if(p) p.textContent=business.services[i][1];
    });

    text('#products .section-kicker', '03 · Automotive & Tyre Division');
    html('#products .section-head h2', 'Global tyre sourcing.<br><em>Built around specification.</em>');
    text('#products .section-head > p', auto.intro);
    html('#products .orbit-center', '<div class="center-label">TYRES</div><span>China · India<br>Thailand</span>');
    qa('#products .product-chip').forEach((chip,i) => { if(auto.brands[i]) chip.innerHTML=`<span>${auto.brands[i][0]}</span>${auto.brands[i][1]}`; });
    qa('#products .product-mobile span').forEach((chip,i) => { if(auto.brands[i]) chip.textContent=`${auto.brands[i][1]} · ${auto.brands[i][0]}`; });
    if (!q('#products .brand-disclaimer')) {
      const d=document.createElement('div'); d.className='section-shell brand-disclaimer';
      d.style.cssText='margin-top:38px;max-width:900px;text-align:center;color:var(--muted);font-size:12px;line-height:1.7';
      d.textContent='Brand availability, country of manufacture, specifications and export eligibility may vary by product and supplier. Products are sourced through appropriate commercial channels, subject to availability and applicable authorization requirements. Premier does not imply authorized distributorship of any brand unless specifically confirmed in writing.';
      q('#products')?.appendChild(d);
    }

    const panel=q('.horeca-panel');
    if(panel) panel.innerHTML=`<div class="section-kicker gold">Chairman's Message</div><h2>${chairman.title.replace(' built ','<br><em>built ').replace('value.','value.</em>')}</h2><p>${chairman.body1}</p><p>${chairman.body2}</p><div class="horeca-tags"><span>Trust</span><span>Quality</span><span>Integrity</span><span>Transparency</span><span>Innovation</span><span>Long-term growth</span></div>`;
    html('.horeca-quote', `<div class="quote-mark">“</div><blockquote>${chairman.quote}</blockquote><div class="quote-rule"></div><span>Chairman · Premier Projects for Food Trading & Services</span>`);

    text('#process .section-kicker', '04 · Our Business Process');
    html('#process .section-head h2', 'A practical path from<br><em>requirement to supply.</em>');
    text('#process .section-head > p', 'Each request is handled around specifications, quantities, commercial conditions and delivery requirements.');
    qa('#process .process-step').forEach((step,i) => {
      if (flow.process[i]) { step.style.display=''; const h3=step.querySelector('h3'), p=step.querySelector('p'); if(h3)h3.textContent=flow.process[i][0]; if(p)p.textContent=flow.process[i][1]; }
      else step.style.display='none';
    });

    if(q('.global')) {
      text('.global .section-kicker', '05 · Industries We Serve');
      html('.global h2', 'Flexible supply for <em>diverse sectors.</em>');
      text('.global .global-copy > p', 'Our trading and procurement capabilities support customers across automotive, construction, food, retail, industrial and project requirements.');
      html('.global .factor-list', industry.industries.map(x=>`<span>${x}</span>`).join(''));
    }
    html('.arabic-band h2', 'شريككم الموثوق<br>للتجارة والتوريد والخدمات');
    text('.arabic-band p', 'نقدم حلولاً متكاملة في قطع غيار السيارات والإطارات والمواد الغذائية ومواد البناء والاستيراد والتصدير والمشتريات وتوريد المناقصات، مع التركيز على الجودة والموثوقية والخدمة المهنية.');

    text('#contact .section-kicker', '06 · Get in Touch');
    text('#contact .contact-copy > p', industry.contact);
    html('#contact select[name="service"]', industry.services.map(x=>`<option>${x}</option>`).join(''));
    const ta=q('#contact textarea[name="message"]'); if(ta) ta.placeholder='Product, brand, size/specification, quantity, destination, tender details or delivery timeline...';
    text('.footer-brand > p', 'Reliable Trading. Quality Products. Professional Solutions.');
  } catch (e) {
    console.warn('Premier content update unavailable', e);
  }
})();