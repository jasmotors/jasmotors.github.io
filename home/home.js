let slideIndex = {};

// Function to show the correct slide
function showSlides(modelId, n) {
    const slides = document.querySelectorAll(`#${modelId} .mySlides`);
    const thumbnails = document.querySelectorAll(`#${modelId} .thumbnails img`);

    // If slideIndex[modelId] is undefined, initialize it
    if (!slideIndex[modelId]) slideIndex[modelId] = 1;

    // Adjust slideIndex based on the input
    if (n > slides.length) slideIndex[modelId] = 1;  // Loop back to first slide
    if (n < 1) slideIndex[modelId] = slides.length;  // Loop to last slide

    // Hide all slides and remove active class from thumbnails
    slides.forEach(slide => slide.style.display = "none");
    thumbnails.forEach(thumb => thumb.classList.remove("active"));

    // Show the current slide
    slides[slideIndex[modelId] - 1].style.display = "block";
    thumbnails[slideIndex[modelId] - 1].classList.add("active");
}

// Function to change slides based on navigation buttons
function plusSlides(n, modelId) {
    showSlides(modelId, slideIndex[modelId] += n);
}

// Function to display a specific slide based on thumbnail click
function currentSlide(n, modelId) {
    showSlides(modelId, slideIndex[modelId] = n);
}

// Initialize slides for all models when the page loads
document.addEventListener("DOMContentLoaded", () => {
    // Array of model IDs
    const models = ["model1", "model2"];  // Add more models if necessary
    models.forEach(modelId => showSlides(modelId, 1));
});
