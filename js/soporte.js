document.addEventListener('DOMContentLoaded', () => {
  // Inicializar EmailJS
  emailjs.init('ACzfn-t1fr278ILd_');
  const form = document.getElementById('contact-form');
  const resp = document.getElementById('respuesta');

  if (form) {
    resp.classList.add('hidden-message');

    form.addEventListener('submit', e => {
      e.preventDefault();

      emailjs.sendForm('service_bs9y55t', 'template_ulrur3z', form)
        .then(() => {
          fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: {
              'Accept': 'application/json'
            }
          }).then(response => {
            if (response.ok) {
              resp.style.display = "block";
              form.reset();
            }
          }).catch(error => {
            console.error("Error de red en Formspree ❌", error);
          });
        }, (error) => {
          console.error("Fallo en EmailJS ❌", error);
        });
    });
  }

  // Preguntas Frecuentes (FAQ)
  const faqs = document.querySelectorAll(".faq-item");

  faqs.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (question && answer) {
      question.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    }
  });

  // Scroll Up
  function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 460) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
  }
  window.addEventListener('scroll', scrollUp);

  // Mostrar menú al volver arriba
  const menu = document.querySelector('.navM');
  let prevScrollPos = window.pageYOffset;

  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > prevScrollPos) {
      menu.classList.remove('show-menu');
    } else {
      if (currentScrollPos === 0) {
        menu.classList.add('show-menu');
      }
    }
    prevScrollPos = currentScrollPos;
  };
});


document.addEventListener("DOMContentLoaded", function () {
  const faqs = document.querySelectorAll(".faq-item");

  faqs.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      item.classList.toggle("active");
      answer.style.maxHeight = item.classList.contains("active") ? answer.scrollHeight + "px" : null;
    });

    answer.style.maxHeight = null;
  });
});
