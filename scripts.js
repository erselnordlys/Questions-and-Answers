

var x = document.querySelectorAll('.answer-block');


window.onload = main;



// показать/скрыть поп ап
function displayPopUp() {
    document.getElementById('pop-up-wrapper').classList.toggle('visible');

}

function displayMainContent() {
    document.getElementById('main-page-content').classList.toggle('visible');

}

function addListenersToAnswerBlocks(total) {
    for (var i = 0; i < total; i++) {
        document.querySelectorAll('.answer-block')[i].onclick = function () {
            displayPopUp();
            startTimer(displayMainContent);
            document.getElementById('main-page-content').style.animation = 'fadeOut 600ms'; // исчезает контент

        };
    }


    document.getElementById('close-icon').onclick = function () {
        startTimer(displayPopUp);
        // startTimer(displayMainContent);
        displayMainContent();
        document.getElementById('pop-up-page').style.animation = 'pop-up-disappear 600ms';
        document.getElementById('pop-up-wrapper').style.animation = 'fadeOut 600ms';

        document.getElementById('main-page-content').style.animation = 'fadeIn 600ms';


    }
}




function main() {
    var x = document.querySelectorAll('.lc__quest-block-1 .answer-block'); // работает только для 1 вопроса
    var length = x.length;
    console.log(length);

    addListenersToAnswerBlocks(length);

}

function startTimer(myFunc) {
    setTimeout( function () { myFunc(); console.log('0.6s passed')}, 600);
}


