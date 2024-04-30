console.log
document.addEventListener("DOMContentLoaded", function() {
    // Create the button element
    let startButton = document.createElement("button");
    startButton.textContent = "Start"; // Set the text content of the button
    startButton.className = "continue";
    // Add event listener to navigate to the next page when clicked
    startButton.addEventListener("click", function() {
        window.location.href = "/pages/step_1.html";
    });

});
