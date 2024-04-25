/* split */

document.addEventListener("DOMContentLoaded", function() {
    let imageWhiteRice = document.querySelector("#choice_white_rice img");
    let imageBrownRice = document.querySelector("#choice_brown_rice img");

    imageWhiteRice.addEventListener("click", function() {
        showAndHideStep2(container1);
    });

    imageBrownRice.addEventListener("click", function() {
        showAndHideStep2(container2);
    });

    let isClicked1Step2 = true;
    let isClicked2Step2 = true;

    let container1 = document.querySelector('#white_rice');
    let container2 = document.querySelector('#brown_rice');

    const showAndHideStep2 = function(container){
        if(container === container1){
            isClicked1Step2 = !isClicked1Step2;
        } else if(container === container2){
            isClicked2Step2 = !isClicked2Step2;
        }

        container.style.display = isClicked1Step2 || isClicked2Step2 ? 'block' : 'none';
    };
});

/* split */

document.addEventListener("DOMContentLoaded", function() {
    let imageBlackBeans = document.querySelector("#choice_black_beans img");
    let imagePintoBeans = document.querySelector("#choice_pinto_beans img");

    imageBlackBeans.addEventListener("click", function() {
        showAndHide(container1);
    });

    imagePintoBeans.addEventListener("click", function() {
        showAndHide(container2);
    });
});

let isClicked1 = true;
let isClicked2 = true;

let container1 = document.querySelector('#black_beans');
let container2 = document.querySelector('#brown_beans');

const showAndHide = function(container){
    if(container === container1){
        if(isClicked1){
            container.style.display = 'block';
            isClicked1 = false;
        }else{
            container.style.display = 'none';
            isClicked1 = true;
        }
    }else if(container === container2){
        if(isClicked2){
            container.style.display = 'block';
            isClicked2 = false;
        }else{
            container.style.display = 'none';
            isClicked2 = true;
        }
    }
}

/* split */

document.addEventListener("DOMContentLoaded", function() {
    let imageSteak = document.querySelector("#choice_steak img");
    let imageBeef = document.querySelector("#choice_beef img");
    let imageVeggies = document.querySelector("#choice_veggies img");
    let imageChicken = document.querySelector("#choice_chicken img");

    imageSteak.addEventListener("click", function() {
        showAndHide(container1);
    });

    imageBeef.addEventListener("click", function() {
        showAndHide(container2);
    });

    imageVeggies.addEventListener("click", function() {
        showAndHide(container3);
    });

    imageChicken.addEventListener("click", function() {
        showAndHide(container4);
    });
});

let isClicked5 = true;
let isClicked6 = true;
let isClicked7 = true;
let isClicked8 = true;

let container5 = document.querySelector('#steak');
let container6 = document.querySelector('#beef');
let container7 = document.querySelector('#veggies');
let container8 = document.querySelector('#chicken');

const showAndHide = function(container){
    if(container === container5){
        if(isClicked5){
            container.style.display = 'block';
            isClicked5 = false;
        }else{
            container.style.display = 'none';
            isClicked5 = true;
        }
    }else if(container === container6){
        if(isClicked6){
            container.style.display = 'block';
            isClicked6 = false;
        }else{
            container.style.display = 'none';
            isClicked6 = true;
        }
    }
    if(container === container7){
        if(isClicked7){
            container.style.display = 'block';
            isClicked7 = false;
        }else{
            container.style.display = 'none';
            isClicked7 = true;
        }
    }else if(container === container8){
        if(isClicked8){
            container.style.display = 'block';
            isClicked8 = false;
        }else{
            container.style.display = 'none';
            isClicked8 = true;
        }
    }
}


/*split*/

document.addEventListener("DOMContentLoaded", function() {
    let imageLettuce = document.querySelector("#choice_lettuce img");
    let imageSourCream = document.querySelector("#choice_sour_cream img");
    let imageCheese = document.querySelector("#choice_cheese img");
    let imageHotSalsa = document.querySelector("#choice_hot_salsa img");
    let imageCorn = document.querySelector("#choice_corn img");
    let imageGuac = document.querySelector("#choice_guac img");
    let imageQueso = document.querySelector("#choice_queso img");
    let imageMildSalsa = document.querySelector("#choice_salsa img");
    let imageGreenSalsa = document.querySelector("#choice_green_salsa img");

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

let isClicked9 = true;
let isClicked10 = true;
let isClicked11 = true;
let isClicked12 = true;
let isClicked13 = true;
let isClicked14 = true;
let isClicked15 = true;
let isClicked16 = true;
let isClicked17 = true;

let container9 = document.querySelector('#lettuce');
let container10 = document.querySelector('#sour_cream');
let container11 = document.querySelector('#cheese');
let container12 = document.querySelector('#hot_salsa');
let container13 = document.querySelector('#corn');
let container14 = document.querySelector('#guac');
let container15 = document.querySelector('#queso');
let container16 = document.querySelector('#mild_salsa');
let container17 = document.querySelector('#green_salsa');

const showAndHide = function(container) {
    if (container === container9) {
        if (isClicked9) {
            container.style.display = 'block';
            isClicked9 = false;
        } else {
            container.style.display = 'none';
            isClicked9 = true;
        }
    } else if (container === container10) {
        if (isClicked10) {
            container.style.display = 'block';
            isClicked10 = false;
        } else {
            container.style.display = 'none';
            isClicked10 = true;
        }
    }
    if (container === container11) {
        if (isClicked11) {
            container.style.display = 'block';
            isClicked11 = false;
        } else {
            container.style.display = 'none';
            isClicked11 = true;
        }
    } else if (container === container12) {
        if (isClicked12) {
            container.style.display = 'block';
            isClicked12 = false;
        } else {
            container.style.display = 'none';
            isClicked12 = true;
        }
    }
    if (container === container13) {
        if (isClicked13) {
            container.style.display = 'block';
            isClicked13 = false;
        } else {
            container.style.display = 'none';
            isClicked13 = true;
        }
    } else if (container === container14) {
        if (isClicked14) {
            container.style.display = 'block';
            isClicked14 = false;
        } else {
            container.style.display = 'none';
            isClicked14 = true;
        }
    }
    if (container === container15) {
        if (isClicked15) {
            container.style.display = 'block';
            isClicked15 = false;
        } else {
            container.style.display = 'none';
            isClicked15 = true;
        }
    } else if (container === container16) {
        if (isClicked16) {
            container.style.display = 'block';
            isClicked16 = false;
        } else {
            container.style.display = 'none';
            isClicked16 = true;
        }
    }
    if (container === container17) {
        if (isClicked17) {
            container.style.display = 'block';
            isClicked17 = false;
        } else {
            container.style.display = 'none';
            isClicked17 = true;
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
