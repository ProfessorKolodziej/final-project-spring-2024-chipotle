


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