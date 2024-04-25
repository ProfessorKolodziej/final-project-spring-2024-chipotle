document.addEventListener("DOMContentLoaded", function() {
    let imageBowl = document.querySelector("#choice_bowl img");
    let imageBurrito = document.querySelector("#choice_burrito img");
    let imageLifestyle_bowl = document.querySelector("#choice_lifestyle_bowl img");

    imageBowl.addEventListener("click", function() {
        window.location.href = "step_2.html";
    });

    imageBurrito.addEventListener("click", function() {
        window.location.href = "step_3.html";
    });

    imageLifestyle_bowl.addEventListener("click", function() {
        window.location.href = "step_4.html";
    });
});

const container1 = document.querySelector('#bowl_image');
const container2 = document.querySelector('#burrito_image');
const container3 = document.querySelector('#lifestyle_bowl_image');
