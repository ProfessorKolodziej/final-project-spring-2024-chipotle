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

let isClicked1 = true;
let isClicked2 = true;
let isClicked3 = true;
let isClicked4 = true;

let container1 = document.querySelector('#steak');
let container2 = document.querySelector('#beef');
let container3 = document.querySelector('#veggies');
let container4 = document.querySelector('#chicken');

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
    if(container === container3){
        if(isClicked3){
            container.style.display = 'block';
            isClicked3 = false;
        }else{
            container.style.display = 'none';
            isClicked3 = true;
        }
    }else if(container === container4){
        if(isClicked4){
            container.style.display = 'block';
            isClicked4 = false;
        }else{
            container.style.display = 'none';
            isClicked4 = true;
        }
    }
}
