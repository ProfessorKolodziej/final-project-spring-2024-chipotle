document.addEventListener("DOMContentLoaded", function() {
    // Create the button element
    let startButton = document.createElement("button");
    startButton.textContent = "Continue"; // Set the text content of the button

    // Add event listener to navigate to the next page when clicked
    startButton.addEventListener("click", function() {
        window.location.href = "/pages/step_1.html";
    });
    // Append the button to the main element with class "content_container"
    let contentContainer = document.querySelector(".content_container");
    contentContainer.appendChild(startButton);
});
