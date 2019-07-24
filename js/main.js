'use strict';

const viewportHeight = screen.availHeight;
let scrollY;
let scroll;
let festivalWrapper = document.querySelector('.festival__wrapper');
let festivalWrapperDistanceToTop;
let summerImg = document.querySelector('.festival-header__img--1');
let festivalImg = document.querySelector('.festival-header__img--2');

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

function moveElement(element, speedScroll, scroll, newScroll, leftBoard, rightBoard, direction) {
    let scrollOffset = newScroll * speedScroll - scroll;

    if (scrollOffset >= 0) {
        changeValueOnOffsetSize(element, scrollOffset, leftBoard, rightBoard, 'left', direction);
    }
    else if(scrollOffset < 0){
        changeValueOnOffsetSize(element, scrollOffset, leftBoard, rightBoard, 'left', direction);
    }
}
document.addEventListener('scroll', function () {
    scrollY = window.pageYOffset;
    festivalWrapperDistanceToTop = festivalWrapper.getBoundingClientRect().top;
    console.log(festivalWrapperDistanceToTop);
    if(festivalWrapperDistanceToTop === 0) {
        moveElement(summerImg, 0.8, scroll, scrollY, -590, 437, 'toRight');
        moveElement(festivalImg, 0.8, scroll, scrollY, 432, 1450, 'toLeft');
    }
    scroll = scrollY * 0.8;
});
