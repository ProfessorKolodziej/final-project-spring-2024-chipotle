


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