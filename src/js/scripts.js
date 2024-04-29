document.addEventListener("DOMContentLoaded", function() {
    // Create the button element
    let startButton = document.createElement("button");
    startButton.textContent = "Start"; // Set the text content of the button

    // Add event listener to navigate to the next page when clicked
    startButton.addEventListener("click", function() {
        window.location.href = "pages/how_to_play.html";
    });
    // Append the button to the main element with class "content-container"
    let contentContainer = document.querySelector(".content_container");
    contentContainer.appendChild(startButton);
});
