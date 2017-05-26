



// fulfill main
window.onload = main;

var curSectionFilter;

// define current width of window

var windowWidth = window.innerWidth;

window.onresize = function () {
    windowWidth = window.innerWidth;
    // если окно шире 600px, то убрать search pop-up
    if (windowWidth > 600 && document.getElementById('search-form__pop-up-input').classList.contains('visible')) {

        setTimeout(function () {
            document.getElementById('search-form__pop-up-input').classList.remove('visible');
            document.getElementById('dark-layer').classList.remove('visible');
        }, 300);

        document.getElementById('search-form__pop-up-input').style.animation = 'popUpSearchDisappears 300ms,fadeOut 300ms';
        document.getElementById('dark-layer').style.animation = 'darkFadeOut 300ms';
    }

};



// set timer for animations
function start500Timer(myFunc) {
    setTimeout( function () { myFunc(); }, 500);

}

function start300Timer(myFunc, myFunc2) {
    setTimeout( function () { myFunc(); myFunc2(); }, 300);

}

// display/hide pop-up
function displayPopUp() {
    document.getElementById('pop-up-wrapper').classList.toggle('visible');
    document.getElementById('main-page-content').classList.toggle('visible');
}

// display/hide content
function displayMainContent() {
    document.getElementById('main-page-content').classList.toggle('visible');

}

function showPopUp() {
    displayPopUp();
    start500Timer(displayMainContent);
    toggleCurrentSectionClass('filter__best');



    document.getElementById('main-page-content').style.animation = 'fadeOut 500ms'; // исчезает контент
    document.getElementById('pop-up-wrapper').style.animation = 'fadeIn 500ms'; // wrapper appears
    document.getElementById('pop-up-page').style.animation = 'pop-up-appear 500ms'; // pop-up page moves in

}

function hidePopUp() {
    start500Timer(displayPopUp);
    displayMainContent();

    toggleCurrentSectionClass('filter__actual');


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



// toggle active class on filters
function toggleCurrentSectionClass(id) {

    curSectionFilter.classList.remove('current-section');

    curSectionFilter =  document.getElementById(id);
    curSectionFilter.classList.add('current-section');
}

// определить текущую выбранную кнопку фильтра
function defineDefaultCurSection() {

    if (document.getElementById('main-page-content').classList.contains("visible")) {
        curSectionFilter = document.getElementById('filter__actual');

    } else if (document.getElementById('pop-up-wrapper').classList.contains("visible")){
        curSectionFilter = document.getElementById('filter__best');
    }


    curSectionFilter.classList.add('current-section');
}



// display pop-up search
function displayPopUpSearch() {
    document.getElementById('search-form__pop-up-input').classList.toggle('visible');
}

// display dark layer
function displayDarkLayer() {
    document.getElementById('dark-layer').classList.toggle('visible');
}

// show search pop-up on click
function showSearchForm() {


    if (windowWidth <= 600) {

        if (document.getElementById('search-form__pop-up-input').classList.contains('visible')) {

            hideSearchForm();
        } else {


            document.getElementById('search-form__pop-up-input').style.animation = 'popUpSearchAppears 300ms, fadeIn 300ms';
            document.getElementById('dark-layer').style.animation = 'darkFadeIn 300ms';

            displayPopUpSearch();
            displayDarkLayer();
        }
    }

}


// hide pop-up search on click
function hideSearchForm() {

    document.getElementById('search-form__pop-up-input').style.animation = 'popUpSearchDisappears 350ms,fadeOut 350ms';
    document.getElementById('dark-layer').style.animation = 'darkFadeOut 350ms';

    start300Timer(displayPopUpSearch, displayDarkLayer);
}




function main() {

    var x = document.querySelectorAll('.lc__quest-block-1 .answer-block'); // работает только для 1 вопроса
    var length = x.length;
    addOnclickListeners(length);

    defineDefaultCurSection();
}







