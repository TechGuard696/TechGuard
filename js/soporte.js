document.addEventListener('DOMContentLoaded', () => {
  emailjs.init('ACzfn-t1fr278ILd_');
  const form = document.getElementById('contact-form');
  const resp = document.getElementById('respuesta');

  if (!form) {
    console.error('No encontré #contact-form');
    return;
  }

  resp.classList.add('hidden-message');

  form.addEventListener('submit', e => {
    e.preventDefault();

    // Enviar con EmailJS usando el formulario directamente
    emailjs.sendForm('service_bs9y55t', 'template_ulrur3z', form)
      .then(function () {
        console.log("Mensaje enviado por EmailJS ✅");

        // También enviar por Formspree (opcional)
        fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: {
            'Accept': 'application/json'
          }
        }).then(response => {
          if (response.ok) {
            console.log("Mensaje enviado por Formspree ✅");
            resp.style.display = "block";
            form.reset();
          } else {
            console.error("Error en Formspree ❌");
          }
        }).catch(error => {
          console.error("Error de red en Formspree ❌", error);
        });
      }, function (error) {
        console.error("Fallo en EmailJS ❌", error);
        console.error(error.text);  // Agrega esto para obtener más detalles del error
      });
  });
});

/*Scroll up*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if(this.scrollY >= 460) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*Ocultar menú en scroll*/
const menu = document.querySelector('.navM');
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
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

document.addEventListener("DOMContentLoaded", function () {
  const faqs = document.querySelectorAll(".faq-item");

  faqs.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      // Alterna clase activa
      item.classList.toggle("active");

      // Mostrar u ocultar la respuesta
      if (item.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = null;
      }
    });

    // Inicialmente ocultar todas las respuestas
    answer.style.maxHeight = null;
  });
});
