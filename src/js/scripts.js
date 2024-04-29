const SELECTED_COLOR = "grey";
const UNSELECTED_COLOR = "white";

document.getElementById("choice_bowl").addEventListener("click", function() {
    if (document.getElementById("choice_bowl").style.background == SELECTED_COLOR) {
        document.getElementById("choice_bowl").style.background=UNSELECTED_COLOR;
    } else {
        document.getElementById("choice_bowl").style.background=SELECTED_COLOR;
    }
    document.getElementById("choice_burrito").style.background=UNSELECTED_COLOR;
    document.getElementById("choice_lifestyle_bowl").style.background=UNSELECTED_COLOR;
});

document.getElementById("choice_burrito").addEventListener("click", function() {
    if (document.getElementById("choice_burrito").style.background == SELECTED_COLOR) {
        document.getElementById("choice_burrito").style.background=UNSELECTED_COLOR;
    } else {
        document.getElementById("choice_burrito").style.background=SELECTED_COLOR;
    }
    document.getElementById("choice_bowl").style.background=UNSELECTED_COLOR;
    document.getElementById("choice_lifestyle_bowl").style.background=UNSELECTED_COLOR;
});

document.getElementById("choice_lifestyle_bowl").addEventListener("click", function() {
    if (document.getElementById("choice_lifestyle_bowl").style.background == SELECTED_COLOR) {
        document.getElementById("choice_lifestyle_bowl").style.background=UNSELECTED_COLOR;
    } else {
        document.getElementById("choice_lifestyle_bowl").style.background=SELECTED_COLOR;
    }
    document.getElementById("choice_burrito").style.background=UNSELECTED_COLOR;
    document.getElementById("choice_bowl").style.background=UNSELECTED_COLOR;
});




const SELECTED_COLOR = "grey";
const UNSELECTED_COLOR = "white";


document.getElementById("choice_white_rice").addEventListener("click", function() {
    if (document.getElementById("choice_white_rice").style.background == SELECTED_COLOR) {
        document.getElementById("choice_white_rice").style.background=UNSELECTED_COLOR;
    } else {
        document.getElementById("choice_white_rice").style.background=SELECTED_COLOR;
    }
    document.getElementById("choice_brown_rice").style.background=UNSELECTED_COLOR;
});

document.getElementById("choice_brown_rice").addEventListener("click", function() {
    if (document.getElementById("choice_brown_rice").style.background == SELECTED_COLOR) {
        document.getElementById("choice_brown_rice").style.background=UNSELECTED_COLOR;
    } else {
        document.getElementById("choice_brown_rice").style.background=SELECTED_COLOR;
    }
    document.getElementById("choice_white_rice").style.background=UNSELECTED_COLOR;
});



const SELECTED_COLOR = "grey";
const UNSELECTED_COLOR = "white";




document.getElementById("choice_black_beans").addEventListener("click", function() {
    if (document.getElementById("choice_black_beans").style.background == SELECTED_COLOR) {
        document.getElementById("choice_black_beans").style.background=UNSELECTED_COLOR;
    } else {
        document.getElementById("choice_black_beans").style.background=SELECTED_COLOR;
    }
    document.getElementById("choice_pinto_beans").style.background=UNSELECTED_COLOR;
});

document.getElementById("choice_pinto_beans").addEventListener("click", function() {
    if (document.getElementById("choice_pinto_beans").style.background == SELECTED_COLOR) {
        document.getElementById("choice_pinto_beans").style.background=UNSELECTED_COLOR;
    } else {
        document.getElementById("choice_pinto_beans").style.background=SELECTED_COLOR;
    }
    document.getElementById("choice_black_beans").style.background=UNSELECTED_COLOR;
});



const SELECTED_COLOR = "grey";
const UNSELECTED_COLOR = "white";


function addClickToggleBackground(elementId) {
    document.getElementById(elementId).addEventListener("click", function() {
        if (document.getElementById(elementId).style.background == SELECTED_COLOR) {
            document.getElementById(elementId).style.background=UNSELECTED_COLOR;
        } else {
            document.getElementById(elementId).style.background=SELECTED_COLOR;
        }
    });
}

addClickToggleBackground("choice_steak");
addClickToggleBackground("choice_beef");
addClickToggleBackground("choice_chicken");
addClickToggleBackground("choice_veggies");



const SELECTED_COLOR = "grey";
const UNSELECTED_COLOR = "white";



function addClickToggleBackground(elementId) {
    document.getElementById(elementId).addEventListener("click", function() {
        if (document.getElementById(elementId).style.background == SELECTED_COLOR) {
            document.getElementById(elementId).style.background=UNSELECTED_COLOR;
        } else {
            document.getElementById(elementId).style.background=SELECTED_COLOR;
        }
    });
}

addClickToggleBackground("choice_lettuce");
addClickToggleBackground("choice_sour_cream");
addClickToggleBackground("choice_cheese");
addClickToggleBackground("choice_veggies");
addClickToggleBackground("choice_corn");
addClickToggleBackground("choice_guac");
addClickToggleBackground("choice_queso");
addClickToggleBackground("choice_salsa");
addClickToggleBackground("choice_green_salsa");
<<<<<<< HEAD
// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)
=======



>>>>>>> parent of 9989650 (jj)
