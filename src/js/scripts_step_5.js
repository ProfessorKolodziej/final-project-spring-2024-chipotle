console.log
let isClicked1 = true;
let isClicked2 = true;
let isClicked3 = true;
let isClicked4 = true;
let isClicked5 = true;
let isClicked6 = true;
let isClicked7 = true;
let isClicked8 = true;
let isClicked9 = true;



const container1 = document.querySelector('#lettuce');
const container2 = document.querySelector('#sour_cream');
const container3 = document.querySelector('#cheese');
const container4 = document.querySelector('#hot_salsa');
const container5 = document.querySelector('#corn');
const container6 = document.querySelector('#guac');
const container7 = document.querySelector('#queso');
const container8 = document.querySelector('#mild_salsa');
const container9 = document.querySelector('#green_salsa');



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
    if(container === container9){
        if(isClicked9){
            container.style.display = 'block';
            isClicked9 = false;
        }else{
            container.style.display = 'none';
            isClicked9 = true;
        }
    }
}
