/* Inspiration taken from https://www.w3schools.com/howto/howto_js_slideshow.asp */
var slideIndex = 0;
displaySlides(slideIndex);

function displaySlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i=0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(displaySlides, 3000);
}
