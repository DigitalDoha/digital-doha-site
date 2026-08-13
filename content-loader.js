(() => {
  const src = document.currentScript?.src;
  if (!src) return;
  const loader = document.createElement('script');
  loader.src = new URL('content-loader-2026.js', src).href;
  loader.async = true;
  document.head.appendChild(loader);
})();