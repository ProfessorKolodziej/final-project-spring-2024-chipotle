document.addEventListener("DOMContentLoaded", function() {
    // Rice selection
    setupSelection("#choice_white_rice img", "#white_rice");
    setupSelection("#choice_brown_rice img", "#brown_rice");

    // Beans selection
    setupSelection("#choice_black_beans img", "#black_beans");
    setupSelection("#choice_pinto_beans img", "#pinto_beans");

    // Protein selection
    setupSelection("#choice_steak img", "#steak");
    setupSelection("#choice_beef img", "#beef");
    setupSelection("#choice_veggies img", "#veggies");
    setupSelection("#choice_chicken img", "#chicken");

    // Toppings selection
    setupSelection("#choice_lettuce img", "#lettuce");
    setupSelection("#choice_sour_cream img", "#sour_cream");
    setupSelection("#choice_cheese img", "#cheese");
    setupSelection("#choice_hot_salsa img", "#hot_salsa");
    setupSelection("#choice_corn img", "#corn");
    setupSelection("#choice_guac img", "#guac");
    setupSelection("#choice_queso img", "#queso");
    setupSelection("#choice_salsa img", "#mild_salsa");
    setupSelection("#choice_green_salsa img", "#green_salsa");

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
