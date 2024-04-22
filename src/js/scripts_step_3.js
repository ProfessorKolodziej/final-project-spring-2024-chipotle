


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