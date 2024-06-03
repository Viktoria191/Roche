document.addEventListener('DOMContentLoaded', () => {
  const options = {
    root: null, // используется вьюпорт для проверки видимости целевого элемента
    rootMargin: '0px',
    threshold: 0.1, // процент пересечения целевого элемента с областью видимости
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = `slideInFrom${entry.target.dataset.direction} 2s forwards`;
        observer.unobserve(entry.target);
      }
    });
  }, options);

  // Добавляем наблюдение за всеми элементами с классом 'word6' и 'word7'
  const elements = document.querySelectorAll('.word6, .word7');
  elements.forEach((el) => {
    const direction = el.classList.contains('word6') ? 'Left' : 'Right';
    el.dataset.direction = direction; // Устанавливаем направление анимации
    observer.observe(el);
  });
});
