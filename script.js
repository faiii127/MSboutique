// script.js - MSboutique Produk Page
// Fitur: efek klik gambar (lightbox), scroll halus, dan transisi menu sederhana

document.addEventListener('DOMContentLoaded', () => {
  /* --------------------
     SMOOTH SCROLL LINK
  -------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* --------------------
     GALERI / PRODUK LIGHTBOX
  -------------------- */
  const produkItems = document.querySelectorAll('.produk-item img');
  if (produkItems.length) {
    // buat elemen overlay
    const overlay = document.createElement('div');
    overlay.id = 'lightbox';
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.background = 'rgba(0,0,0,0.8)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.visibility = 'hidden';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.3s ease';
    overlay.style.zIndex = '9999';

    const img = document.createElement('img');
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    img.style.borderRadius = '10px';
    overlay.appendChild(img);
    document.body.appendC
