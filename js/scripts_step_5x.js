document.addEventListener("DOMContentLoaded", function() {
    let imageLettuce = document.querySelector("#choice-lettuce img");
    let imageSourCream = document.querySelector("#choice-sour-cream img");
    let imageCheese = document.querySelector("#choice-cheese img");
    let imageHotSalsa = document.querySelector("#choice-hot-salsa img");
    let imageCorn = document.querySelector("#choice-corn img");
    let imageGuac = document.querySelector("#choice-guac img");
    let imageQueso = document.querySelector("#choice-queso img");
    let imageMildSalsa = document.querySelector("#choice-salsa img");
    let imageGreenSalsa = document.querySelector("#choice-green-salsa img");

    imageLettuce.addEventListener("click", function() {
        showAndHide(container1);
    });

    imageSourCream.addEventListener("click", function() {
        showAndHide(container2);
    });

    imageCheese.addEventListener("click", function() {
        showAndHide(container3);
    });

    imageHotSalsa.addEventListener("click", function() {
        showAndHide(container4);
    });

    imageCorn.addEventListener("click", function() {
        showAndHide(container5);
    });

    imageGuac.addEventListener("click", function() {
        showAndHide(container6);
    });

    imageQueso.addEventListener("click", function() {
        showAndHide(container7);
    });

    imageMildSalsa.addEventListener("click", function() {
        showAndHide(container8);
    });

    imageGreenSalsa.addEventListener("click", function() {
        showAndHide(container9);
    });
});

let isClicked1 = true;
let isClicked2 = true;
let isClicked3 = true;
let isClicked4 = true;
let isClicked5 = true;
let isClicked6 = true;
let isClicked7 = true;
let isClicked8 = true;
let isClicked9 = true;

let container1 = document.querySelector('#lettuce');
let container2 = document.querySelector('#sour-cream');
let container3 = document.querySelector('#cheese');
let container4 = document.querySelector('#hot-salsa');
let container5 = document.querySelector('#corn');
let container6 = document.querySelector('#guac');
let container7 = document.querySelector('#queso');
let container8 = document.querySelector('#mild-salsa');
let container9 = document.querySelector('#green-salsa');

const showAndHide = function(container) {
    if (container === container1) {
        if (isClicked1) {
            container.style.display = 'block';
            isClicked1 = false;
        } else {
            container.style.display = 'none';
            isClicked1 = true;
        }
    } else if (container === container2) {
        if (isClicked2) {
            container.style.display = 'block';
            isClicked2 = false;
        } else {
            container.style.display = 'none';
            isClicked2 = true;
        }
    }
    if (container === container3) {
        if (isClicked3) {
            container.style.display = 'block';
            isClicked3 = false;
        } else {
            container.style.display = 'none';
            isClicked3 = true;
        }
    } else if (container === container4) {
        if (isClicked4) {
            container.style.display = 'block';
            isClicked4 = false;
        } else {
            container.style.display = 'none';
            isClicked4 = true;
        }
    }
    if (container === container5) {
        if (isClicked5) {
            container.style.display = 'block';
            isClicked5 = false;
        } else {
            container.style.display = 'none';
            isClicked5 = true;
        }
    } else if (container === container6) {
        if (isClicked6) {
            container.style.display = 'block';
            isClicked6 = false;
        } else {
            container.style.display = 'none';
            isClicked6 = true;
        }
    }
    if (container === container7) {
        if (isClicked7) {
            container.style.display = 'block';
            isClicked7 = false;
        } else {
            container.style.display = 'none';
            isClicked7 = true;
        }
    } else if (container === container8) {
        if (isClicked8) {
            container.style.display = 'block';
            isClicked8 = false;
        } else {
            container.style.display = 'none';
            isClicked8 = true;
        }
    }
    if (container === container9) {
        if (isClicked9) {
            container.style.display = 'block';
            isClicked9 = false;
        } else {
            container.style.display = 'none';
            isClicked9 = true;
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let deselectButton = document.getElementById("deselectButton");

    deselectButton.addEventListener("click", function() {
        deselectAll();
    });
});

function deselectAll() {
    container1.style.display = 'none';
    container2.style.display = 'none';
    container3.style.display = 'none';
    container4.style.display = 'none';
    container5.style.display = 'none';
    container6.style.display = 'none';
    container7.style.display = 'none';
    container8.style.display = 'none';
    container9.style.display = 'none';

    isClicked1 = true;
    isClicked2 = true;
    isClicked3 = true;
    isClicked4 = true;
    isClicked5 = true;
    isClicked6 = true;
    isClicked7 = true;
    isClicked8 = true;
    isClicked9 = true;
}
