document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;


    document.querySelectorAll('.faq-item').forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
        const resetToggle = i.querySelector('.faq-toggle');
        const resetHeading = i.querySelector('.faq-question span:first-child');
        resetToggle.textContent = '+';
        resetToggle.style.color = '#fff';
        resetHeading.style.color = '#fff';
      }
    });


    item.classList.toggle('active');


    const toggle = item.querySelector('.faq-toggle');
    const heading = item.querySelector('.faq-question span:first-child');

    if (item.classList.contains('active')) {
      toggle.textContent = '×';
      toggle.style.color = '#00ffff';
      heading.style.color = '#00ffff';
    } else {
      toggle.textContent = '+';
      toggle.style.color = '#fff';
      heading.style.color = '#fff';
    }
  });
});
