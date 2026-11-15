const closeNewsHeader = () => {
    document.getElementById('newsHeader').style.display = 'none';
}

var sidenav = document.getElementById('sidenav');
var menu = document.getElementById('menu-icon');
var closenav = document.getElementById("close-nav");

menu.addEventListener('click', function() {
    sidenav.style.left = 0;
});

closenav.addEventListener('click', function() {
    sidenav.style.left = '-50%';
})

/* home page slider */

let currentSlide = 0;
const sliderImages = document.getElementById('sliderImages');
const totalSlides = sliderImages.children.length;
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

nextBtn.addEventListener('click', function() {
    currentSlide++;
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    sliderImages.style.transform = `translateX(-${currentSlide * 100}%)`;
});

prevBtn.addEventListener('click', function() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    sliderImages.style.transform = `translateX(-${currentSlide * 100}%)`;
});

function toggleHeart(element) {
    element.classList.add("hidden");

    if (element.nextElementSibling) {
        element.nextElementSibling.classList.remove("hidden");
    } else {
        element.previousElementSibling.classList.remove("hidden");
    }
}

/* collections page search functionality */