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
