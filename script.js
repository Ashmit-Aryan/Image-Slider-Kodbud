
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;
let autoSlide;

function showSlide(index) {
    // Wrap around at the beginning and end
    currentIndex = (index + images.length) % images.length;

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;

    document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
    });
}

function changeSlide(direction) {
    showSlide(currentIndex + direction);
    resetAutoSlide();
}

// Create indicator dots
images.forEach((image, index) => {
    const dot = document.createElement("span");

    dot.classList.add("dot");
    dot.addEventListener("click", () => {
        showSlide(index);
        resetAutoSlide();
    });

    dotsContainer.appendChild(dot);
});

// Automatic sliding every 3 seconds
function startAutoSlide() {
    autoSlide = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000);
}

function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

// Initialize slider
showSlide(0);
startAutoSlide();
