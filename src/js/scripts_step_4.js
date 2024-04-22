


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