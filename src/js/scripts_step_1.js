

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
