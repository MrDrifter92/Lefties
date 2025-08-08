// assets/js/nav.js
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('hamburger');
  const drawer = document.getElementById('drawer');
  const closeBtn = document.getElementById('closeDrawer');
  const backdrop = document.getElementById('drawerBackdrop');

  if (!burger || !drawer || !closeBtn || !backdrop) return;

  const open = () => {
    drawer.classList.remove('translate-x-full');
    backdrop.classList.remove('pointer-events-none');
    backdrop.classList.add('opacity-100');
    document.documentElement.classList.add('overflow-hidden');
    document.body.classList.add('overflow-hidden');
  };

  const close = () => {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('pointer-events-none');
    backdrop.classList.remove('opacity-100');
    document.documentElement.classList.remove('overflow-hidden');
    document.body.classList.remove('overflow-hidden');
  };

  burger.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  backdrop.addEventListener('click', close);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
});
