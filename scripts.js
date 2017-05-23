

var x = document.querySelectorAll('.answer-block');


window.onload = main;



// показать/скрыть поп ап
function displayPopUp() {
    document.getElementById('pop-up-page').classList.toggle('visible');
    document.getElementById('main-page-content').classList.toggle('visible');
}


function addListenersToAnswerBlocks(total) {
    for (var i = 0; i < total; i++) {
        document.querySelectorAll('.answer-block')[i].onclick = function () { displayPopUp(); };
    }

    document.getElementById('close-icon').onclick = function () { displayPopUp(); }
}




function main() {
    var x = document.querySelectorAll('.lc__quest-block-1 .answer-block'); // работает только для 1 вопроса
    var length = x.length;
    console.log(length);

    addListenersToAnswerBlocks(length);

}

