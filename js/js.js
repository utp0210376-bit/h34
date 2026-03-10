let currentIndex = 0;

const galleryContainer = document.querySelector('#gallery-container');
const totalImages = document.querySelectorAll('.gallery-item').length;

document.querySelector('.botonatras').addEventListener('click', () => {
    navigate(-1);
});

document.querySelector('.botonsiguiente').addEventListener('click', () => {
    navigate(1);
});

function navigate(direction) {
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    const offset = -currentIndex * 100;
    galleryContainer.style.transform = `translateX(${offset}%)`;
}

let autoplayInterval = null;

function startAutoplay(interval) {
    stopAutoplay();
    autoplayInterval = setInterval(() => {
        navigate(1);
    }, interval);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

startAutoplay(3000);

document.querySelectorAll('.botonsiguiente, .botonatras')
.forEach(button => {
    button.addEventListener('click', stopAutoplay);
});

galleryContainer.addEventListener('mouseenter', stopAutoplay);
galleryContainer.addEventListener('mouseleave', () => startAutoplay(3000));

let bot = document.getElementById("botoncatalogo");

bot.addEventListener("click", function() {
    let catalogo = document.getElementById("catalogo");

    catalogo.scrollIntoView({
        behavior: "smooth"
    });
});