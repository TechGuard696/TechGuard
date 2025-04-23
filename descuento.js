let currentIndex = 0;
const slides = document.querySelectorAll('.discount-slide');
const totalSlides = slides.length;

function showNextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    updateSlider();
}

function updateSlider() {
    const newTransformValue = -currentIndex * 100 + '%';
    document.querySelector('.discount-slider').style.transform = `translateX(${newTransformValue})`;
}

// Cambiar de descuento cada 3 segundos
setInterval(showNextSlide, 3000);