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
   
    document.addEventListener("DOMContentLoaded", function() {
        let playAgainBtn = document.getElementById('playAgainBtn');
        if (playAgainBtn) {
            playAgainBtn.addEventListener('click', function() {
                window.location.href = 'step_1.html';
            });
        }
    });
    
    const itemTexts = document.querySelectorAll('.item-text');
    const foodGridItems = document.querySelectorAll('.food_grid ul li');

    // Function to toggle text visibility based on index
    function toggleTextVisibility(index) {
        itemTexts.forEach((text, i) => {
            if (i === index) {
                text.style.display = 'block'; // Show text
            } else {
                text.style.display = 'none'; // Hide text
            }
        });
    }

    // Add event listeners to food grid items
    foodGridItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            toggleTextVisibility(index); // Toggle text visibility on click
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        const itemTexts = document.querySelectorAll('.item-text');
        const foodGridItems = document.querySelectorAll('.food_grid ul li');

        // Function to toggle text visibility based on index
        function toggleTextVisibility(index) {
            itemTexts.forEach((text, i) => {
                if (i === index) {
                    text.style.display = 'block'; // Show text
                } else {
                    text.style.display = 'none'; // Hide text
                }
            });
        }

        // Add event listeners to food grid items
        foodGridItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                toggleTextVisibility(index); // Toggle text visibility on click
            });
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        const itemTexts = document.querySelectorAll('.item-text');
        const foodGridItems = document.querySelectorAll('.food_grid ul li');
        const backBtn = document.getElementById('backBtn');
        const nextBtn = document.getElementById('nextBtn');
        let currentIndex = 0;

        // Function to toggle text visibility based on index
        function toggleTextVisibility(index) {
            itemTexts.forEach((text, i) => {
                if (i === index) {
                    text.style.display = 'block'; // Show text
                } else {
                    text.style.display = 'none'; // Hide text
                }
            });
        }

        // Add event listeners to food grid items
        foodGridItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                currentIndex = index;
                toggleTextVisibility(index); // Toggle text visibility on click
            });
        });

        // Event listener for the "Next" button
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % itemTexts.length;
            toggleTextVisibility(currentIndex);
        });

        // Event listener for the "Back" button
        backBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + itemTexts.length) % itemTexts.length;
            toggleTextVisibility(currentIndex);
        });
    });
});
