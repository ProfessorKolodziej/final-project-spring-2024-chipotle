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

document.addEventListener("DOMContentLoaded", function() {
    let playAgainButton = document.getElementById("playAgainButton");
    playAgainButton.addEventListener("click", function() {
        window.location.href = "index.html";
    });
});