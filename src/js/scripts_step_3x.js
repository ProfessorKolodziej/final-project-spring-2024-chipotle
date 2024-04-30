/*start step 3 javascript*/

document.addEventListener("DOMContentLoaded", function() {
    let imageBlackBeans = document.querySelector("#choice-black-beans img");
    let imagePintoBeans = document.querySelector("#choice-pinto-beans img");

    imageBlackBeans.addEventListener("click", function() {
        showAndHide(container1);
    });

    imagePintoBeans.addEventListener("click", function() {
        showAndHide(container2);
    });
});

let isClicked1 = true;
let isClicked2 = true;

let container1 = document.querySelector('#black-beans');
let container2 = document.querySelector('#brown-beans');

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

/*end step 3 javascript*/
