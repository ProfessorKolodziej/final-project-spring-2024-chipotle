document.addEventListener("DOMContentLoaded", function() {
    // Rice selection
    setupSelection("#choice-white-rice img", "#white-rice");
    setupSelection("#choice-brown-rice img", "#brown-rice");

    // Beans selection
    setupSelection("#choice-black-beans img", "#black-beans");
    setupSelection("#choice-pinto-beans img", "#pinto-beans");

    // Protein selection
    setupSelection("#choice-steak img", "#steak");
    setupSelection("#choice-beef img", "#beef");
    setupSelection("#choice-veggies img", "#veggies");
    setupSelection("#choice-chicken img", "#chicken");

    // Toppings selection
    setupSelection("#choice-lettuce img", "#lettuce");
    setupSelection("#choice-sour-cream img", "#sour-cream");
    setupSelection("#choice-cheese img", "#cheese");
    setupSelection("#choice-hot-salsa img", "#hot-salsa");
    setupSelection("#choice-corn img", "#corn");
    setupSelection("#choice-guac img", "#guac");
    setupSelection("#choice-queso img", "#queso");
    setupSelection("#choice-salsa img", "#mild-salsa");
    setupSelection("#choice-green-salsa img", "#green-salsa");

    let deselectButton = document.getElementById("deselectButton");
    deselectButton.addEventListener("click", function() {
        deselectAll();
    });
});

function setupSelection(imageSelector, containerSelector) {
    let image = document.querySelector(imageSelector);
    let container = document.querySelector(containerSelector);
    let isClicked = true;

    image.addEventListener("click", function() {
        if (isClicked) {
            container.style.display = 'block';
            isClicked = false;
        } else {
            container.style.display = 'none';
            isClicked = true;
        }
    });
}

function deselectAll() {
    let containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        container.style.display = 'none';
    });
}
