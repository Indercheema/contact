'use strict';

/*
    JavaScript Basics
    Inderjeet Cheema

*/
import { onEvent, getElement, select } from "./utils.js";
import { Contact } from "./Contact";



const btn = select('.btn');
const showInfo = select('.info');
const colorBox = select('.color');
const shapeBox = select('.shape');
const bigBox = select('.big-box');

// onEvent('click' , btn, function(event){
//     event.preventDefault();
//     info.innerText = 'working';
// });

const myColors = {
    blue: "#09f",
    green: "#9f0",
    orange: "#f90",
    pink: "#f09",
    purple: "#90f"
};

function listContacts() {
    let count = 0;
    const shapes = [];
    if (count >= 15)
    return;

count += 1;
    let newDiv = document.createElement('div');


    newDiv.classList.add('square');
    newDiv.style.backgroundColor = "#1a1d28";
    newDiv.setAttribute('shapeType', count);
    shapes.push(newDiv);

    bigBox.appendChild(newDiv);

}

onEvent('click', btn, function (event) {
    event.preventDefault();
    listContacts();
   
});


