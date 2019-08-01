'use strict';

const viewportHeight = screen.availHeight;
let scrollY;
let scroll;
let festivalWrapper = document.querySelector('.festival__wrapper');
let festivalWrapperDistanceToTop;
let summerImg = document.querySelector('.festival-header__img--1');
let festivalImg = document.querySelector('.festival-header__img--2');

function changeValueOnOffsetSize1(element, offset, minBoard, maxBoard, changedValue, direction) {
    let coordX;

    switch (direction) {
        case "toRight" :
            coordX = element.offsetLeft + offset;
            break;
        case "toLeft":
            coordX = element.offsetLeft - offset;
            break;
        case "toTop":
            coordX = element.offsetTop - offset;
            break;
        case "toBottom":
            coordX = element.offsetTop + offset;
            break;
    }
    if(coordX > minBoard && coordX < maxBoard) {
        element.style[changedValue] = coordX + 'px';
    }
}

function moveElement1(element, speedScroll, scroll, newScroll, leftBoard, rightBoard, direction) {
    let scrollOffset = newScroll * speedScroll - scroll;

    if (scrollOffset >= 0) {
        changeValueOnOffsetSize1(element, scrollOffset, leftBoard, rightBoard, 'left', direction);
    }
    else if(scrollOffset < 0){
        changeValueOnOffsetSize1(element, scrollOffset, leftBoard, rightBoard, 'left', direction);
    }
}
document.addEventListener('scroll', function () {
    scrollY = window.pageYOffset;
    festivalWrapperDistanceToTop = festivalWrapper.getBoundingClientRect().top;

    if(festivalWrapperDistanceToTop === 0) {
        moveElement1(summerImg, 0.8, scroll, scrollY, -590, 437, 'toRight');
        moveElement1(festivalImg, 0.8, scroll, scrollY, 432, 1450, 'toLeft');
    }
    scroll = scrollY * 0.8;
});

function changeValueOnOffsetSize(element, offset, minBoard, maxBoard, changedValue, direction) {
    let coordX;

    switch (direction) {
        case "toRight" :
            coordX = element.offsetLeft + offset;
            break;
        case "toLeft":
            coordX = element.offsetLeft - offset;
            break;
        case "toTop":
            coordX = element.offsetTop - offset;
            break;
        case "toBottom":
            coordX = element.offsetTop + offset;
            break;
    }
    if(coordX > minBoard && coordX < maxBoard) {
        element.style[changedValue] = coordX + 'px';
    }
}

function moveElement(element, parentBlock, speedScroll, scroll, newScroll, percentAppearance, percentDisappearance, leftBoard, rightBoard, direction) {
    let scrollOffset = newScroll * speedScroll - scroll;

    let parentBlockTop = parentBlock.getBoundingClientRect().top;
    let parentBlockBottom = parentBlock.getBoundingClientRect().bottom;

    if ((parentBlockTop < (viewportHeight * percentAppearance)) && scrollOffset >= 0) {
        changeValueOnOffsetSize(element, scrollOffset, leftBoard, rightBoard, 'left', direction);
    }
    else if((parentBlockBottom > (viewportHeight * percentDisappearance)) && scrollOffset < 0){
        changeValueOnOffsetSize(element, scrollOffset, leftBoard, rightBoard, 'left', direction);
    }
}

(function f() {
    function Tape(el) {
        let scrollY;
        let scroll;
        let parent = el.parentElement;
        document.addEventListener('scroll', function () {
            scrollY = window.pageYOffset;
            moveElement(el, parent, 0.8, scroll, scrollY, 0.95, 0.05, -5000, 0, 'toLeft');
            scroll = scrollY * 0.8;
        });
    };
    let tapeList = document.querySelectorAll('.festival-tape__wrapper');
    Array.prototype.forEach.call(tapeList, (item)=> {
        let tape = new Tape(item);
    });
})();
(function f() {
     function MovedImg(el) {
         let scrollY;
         let scroll;
         let parent = el.parentElement;
         document.addEventListener('scroll', function () {
             scrollY = window.pageYOffset;
             moveElement(el, parent, 0.9, scroll, scrollY, 0.85, 1.3, 0, 720, 'toRight');
             scroll = scrollY * 0.9;
         });
     };
     let imgList = document.querySelectorAll('.festival-block__img--moved');
     Array.prototype.forEach.call(imgList, (item)=> {
         let img = new MovedImg(item);
     });
})();
