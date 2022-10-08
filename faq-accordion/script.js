const accordionQuestion = document.querySelectorAll(".accordion-question");

accordionQuestion.forEach(question => {
  question.addEventListener('click', (e) => {
    e.target.classList.toggle('open');
    e.target.nextElementSibling.classList.toggle('open');
  })
})