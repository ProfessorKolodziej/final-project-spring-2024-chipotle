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
    const totalSections = 4;

    function showSection(index) {
        for (let i = 1; i <= totalSections; i++) {
            const section = document.getElementById('section' + i);
            if (section) {
                section.style.display = i === index ? 'block' : 'none';
            }
        }
        
        const finishBtn = document.getElementById('finishBtn');
        if (index === totalSections && finishBtn) {
            finishBtn.style.display = 'block';
        } else if (finishBtn) {
            finishBtn.style.display = 'none';
        }
        
        const nextBtn = document.getElementById('nextBtn');
        if (nextBtn) {
            nextBtn.innerText = index === totalSections ? 'Finish' : 'Next';
        }
    }

    let sectionIndex = 1;
    showSection(sectionIndex);

    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', function () {
            sectionIndex = Math.max(1, sectionIndex - 1);
            showSection(sectionIndex);
        });
    }

    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            if (sectionIndex === totalSections) {
                window.location.href = 'bye.html';
            } else {
                sectionIndex = Math.min(totalSections, sectionIndex + 1);
                showSection(sectionIndex);
            }
        });
    }
});
