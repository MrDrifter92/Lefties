// assets/js/nav.js
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('hamburger');
  const drawer = document.getElementById('drawer');
  const closeBtn = document.getElementById('closeDrawer');

  const open = () => drawer.classList.remove('translate-x-full');
  const close = () => drawer.classList.add('translate-x-full');

  if (burger) burger.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);

  // Close with ESC
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

  // Optional: close if user taps outside the drawer
  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) close();
  });
});
