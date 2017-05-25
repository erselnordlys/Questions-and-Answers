

// var x = document.querySelectorAll('.answer-block');


window.onload = main;

// set timer for animations
function startTimer(myFunc) {
    setTimeout( function () { myFunc(); console.log('0.6s passed')}, 500);
}

// display/hide pop-up
function displayPopUp() {
    document.getElementById('pop-up-wrapper').classList.toggle('visible');

}

// display/hide content
function displayMainContent() {
    document.getElementById('main-page-content').classList.toggle('visible');

}


function showPopUp() {
    displayPopUp();
    startTimer(displayMainContent);
    document.getElementById('main-page-content').style.animation = 'fadeOut 500ms'; // исчезает контент
    document.getElementById('pop-up-wrapper').style.animation = 'fadeIn 500ms'; // wrapper appears
    document.getElementById('pop-up-page').style.animation = 'pop-up-appear 500ms'; // pop-up page moves in

}


function hidePopUp() {
    startTimer(displayPopUp);
    displayMainContent();
    document.getElementById('pop-up-page').style.animation = 'pop-up-disappear 500ms'; // pop-up page moves out
    document.getElementById('pop-up-wrapper').style.animation = 'fadeOut 500ms'; // wrapper fades out
    document.getElementById('main-page-content').style.animation = 'fadeIn 500ms'; // content appears
}

// add onclick listeners to ans-blocks and close-icon
function addOnclickListeners(total) {
    for (var i = 0; i < total; i++) {
        document.querySelectorAll('.answer-block')[i].onclick = showPopUp; // add listener on ans-blocks
    }

    document.getElementsByClassName('quest-block__header')[0].onclick = showPopUp; // add listener on header


    document.getElementById('close-icon').onclick = hidePopUp; // add onclick on close-icon
    document.getElementById('backgr-pop-up').onclick = hidePopUp; // add onclick on backgr
}



function main() {
    var x = document.querySelectorAll('.lc__quest-block-1 .answer-block'); // работает только для 1 вопроса
    var length = x.length;
    console.log(length);

    addOnclickListeners(length);

}




