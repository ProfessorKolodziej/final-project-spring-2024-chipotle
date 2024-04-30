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

document.addEventListener("DOMContentLoaded", function() {
    let sectionIndex = 1; // Initialize section index

    // Function to show current section and hide others
    function showSection(index) {
        for (let i = 1; i <= 4; i++) {
            document.getElementById('section' + i).style.display = i === index ? 'block' : 'none';
        }
    }

    // Initial section display
    showSection(sectionIndex);

    // Back button event listener
    document.getElementById('backBtn').addEventListener('click', function () {
        sectionIndex = Math.max(1, sectionIndex - 1);
        showSection(sectionIndex);
    });

    // Next button event listener
    document.getElementById('nextBtn').addEventListener('click', function () {
        sectionIndex = Math.min(4, sectionIndex + 1);
        showSection(sectionIndex);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let playAgainButton = document.getElementById("playAgainButton");
    playAgainButton.addEventListener("click", function() {
        window.location.href = "index.html";
    });
});