export const scrollToHome = () => {
  const element = document.getElementById('home');
  if (!element) return;

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};