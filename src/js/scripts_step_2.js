/*start step 2 code*/

document.addEventListener("DOMContentLoaded", function() {
    let imageWhiteRice = document.querySelector("#choice_white_rice img");
    let imageBrownRice = document.querySelector("#choice_brown_rice img");

    imageWhiteRice.addEventListener("click", function() {
        showAndHideStep2(container1, container2);
    });

    imageBrownRice.addEventListener("click", function() {
        showAndHideStep2(container2, container1);
    });
});

let isClicked1Step2 = true;
let isClicked2Step2 = true;

let container1 = document.querySelector('#white_rice');
let container2 = document.querySelector('#brown_rice');

const showAndHideStep2 = function(containerToShow, containerToHide){
    if(containerToShow === container1){
        if(isClicked1Step2){
            containerToShow.style.display = 'block';
            isClicked1Step2 = false;
        }else{
            containerToShow.style.display = 'none';
            isClicked1Step2 = true;
        }
    }else if(containerToShow === container2){
        if(isClicked2Step2){
            containerToShow.style.display = 'block';
            isClicked2Step2 = false;
        }else{
            containerToShow.style.display = 'none';
            isClicked2Step2 = true;
        }
    }

    containerToHide.style.display = 'none';
}

/*end step 2 code*/


/*start step 3 code*/

document.addEventListener("DOMContentLoaded", function() {
    let imageBlackBeans = document.querySelector("#choice_black_beans img");
    let imagePintoBeans = document.querySelector("#choice_pinto_beans img");

    imageBlackBeans.addEventListener("click", function() {
        showAndHideStep3(container3, container4);
    });

    imagePintoBeans.addEventListener("click", function() {
        showAndHideStep3(container4, container3);
    });
});

let isClicked1Step3 = true;
let isClicked2Step3 = true;

let container3 = document.querySelector('#black_beans');
let container4 = document.querySelector('#brown_beans');

const showAndHideStep3 = function(containerToShow, containerToHide){
    if(containerToShow === container3){
        if(isClicked1Step3){
            containerToShow.style.display = 'block';
            isClicked1Step3 = false;
        }else{
            containerToShow.style.display = 'none';
            isClicked1Step3 = true;
        }
    }else if(containerToShow === container4){
        if(isClicked2Step3){
            containerToShow.style.display = 'block';
            isClicked2Step3 = false;
        }else{
            containerToShow.style.display = 'none';
            isClicked2Step3 = true;
        }
    }

    containerToHide.style.display = 'none';
}

/*end step 3 code*/
