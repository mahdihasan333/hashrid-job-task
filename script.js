document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;

    // সব item থেকে active এবং style রিমুভ করো
    document.querySelectorAll('.faq-item').forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
        const resetToggle = i.querySelector('.faq-toggle');
        const resetHeading = i.querySelector('.faq-question span:first-child');
        resetToggle.textContent = '+';
        resetToggle.style.color = '#fff'; // ❌ OFF অবস্থায় toggle এর রঙ হবে সাদা
        resetHeading.style.color = '#fff'; // ❌ OFF অবস্থায় heading এর রঙ হবে সাদা
      }
    });

    // toggle active class
    item.classList.toggle('active');

    // toggle text and color
    const toggle = item.querySelector('.faq-toggle');
    const heading = item.querySelector('.faq-question span:first-child');

    if (item.classList.contains('active')) {
      toggle.textContent = '×';
      toggle.style.color = '#00ffff'; // ✅ ON অবস্থায় cross রঙ cyan
      heading.style.color = '#00ffff'; // ✅ ON অবস্থায় heading রঙ cyan
    } else {
      toggle.textContent = '+';
      toggle.style.color = '#fff'; // ❌ OFF অবস্থায় + রঙ সাদা
      heading.style.color = '#fff'; // ❌ OFF অবস্থায় heading রঙ সাদা
    }
  });
});
