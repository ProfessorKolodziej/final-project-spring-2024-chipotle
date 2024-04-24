console.log
let isClicked1 = true;
let isClicked2 = true;
let isClicked3 = true;
let isClicked4 = true;


const container1 = document.querySelector('#steak');
const container2 = document.querySelector('#beef');
const container3 = document.querySelector('#veggies');
const container4 = document.querySelector('#chicken');


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
