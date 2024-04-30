document.addEventListener("DOMContentLoaded", function() {
    // Find the "Play Again" button element
    let playAgainButton = document.querySelector(".continue button");
    // Add event listener to navigate to the step_1.html when clicked
    playAgainButton.addEventListener("click", function() {
        window.location.href = "/pages/step_1.html";
    });
});
