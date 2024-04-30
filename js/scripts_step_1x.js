document.addEventListener("DOMContentLoaded", function() {
    let imageBowl = document.querySelector("#choice-bowl img");
    let imageBurrito = document.querySelector("#choice-burrito img");
    let imageLifestyle_bowl = document.querySelector("#choice-lifestyle-bowl img");

    imageBowl.addEventListener("click", function() {
        window.location.href = "bowl.html";
    });

    imageBurrito.addEventListener("click", function() {
        window.location.href = "burrito.html";
    });

    imageLifestyle_bowl.addEventListener("click", function() {
        window.location.href = "lifestyle_bowl.html";
    });
});

const container1 = document.querySelector('#bowl-image');
const container2 = document.querySelector('#burrito-image');
const container3 = document.querySelector('#lifestyle-bowl-image');
np