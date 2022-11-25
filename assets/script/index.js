'use strict';

/*
    JavaScript Basics
    Inderjeet Cheema

*/
import { onEvent, getElement, select } from "./utils.js";
import { Contact } from "./Contact.js";



const btn = select('.btn');
const btn2 = select('.btn2');
const showInfo = select('.info');
const input = select('.input');
const bigBox = select('.big-box');
const emailRegex = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;

// onEvent('click' , btn, function(event){
//     event.preventDefault();
//     info.innerText = 'working';
// });
const shapes = [];
let contacts = [];

onEvent('load', window, () => {
    btn2.innerText = `Saved Contacts : ${contacts.length}`;
});

function updateArray(array) {
    if (Array.isArray(array) && array.length > 0) {
        btn2.innerText = `Saved Contacts : ${array.length}`;
    }
}

function listContacts(name, email, city) {
    // let userInput = input.value;

    let userSplit = input.value.split(', ');
    if (userSplit.length === 3) {
        showInfo.innerText = '';
        if (!emailRegex.test(userSplit[2])) {
            showInfo.innerText = 'Please Enter valid Email!'
        } else {
            showInfo.innerText = '';
            const contact = new Contact(name, email, city);
            contact.name = userSplit[0];
            contact.city = userSplit[1];
            contact.email = userSplit[2];
            contacts.unshift(contact);
            console.log(contacts);
            console.log(shapes);
            let newDiv = document.createElement('div');
            let displayName = document.createElement('p');
            displayName.classList.add('para')
            let displayCity = document.createElement('p');
            displayCity.classList.add('para')
            let displayEmail = document.createElement('p');
            displayEmail.classList.add('para')


            displayName.innerText = `Name : ${contact.name}`;
            displayCity.innerText = `City : ${contact.city}`;
            displayEmail.innerText = `Email : ${contact.email}`;
            newDiv.appendChild(displayName);
            newDiv.appendChild(displayCity);
            newDiv.appendChild(displayEmail);


            newDiv.classList.add('square');
            newDiv.style.backgroundColor = "#1a1d28";
            shapes.unshift(newDiv);
            updateArray(contacts);
            bigBox.appendChild(newDiv);

            onEvent('click', newDiv, () => {
                showInfo.innerText = '';
                const contactsIndex = contacts.indexOf(contact)
                if (contactsIndex > -1) {
                    contacts.splice(contactsIndex, 1);
                    newDiv.remove();
                    updateArray(contacts);
                }

            });
        }

    } else {
        showInfo.innerText = 'Please enter name, city, email'
    }


}


onEvent('click', btn, function (event) {
    event.preventDefault();
    if (contacts.length < 10 && input.value !== '') {
        listContacts();

        
    } else if (input.value === '') {
        showInfo.innerText = 'Please provide name, city, email';
    } else if (contacts.length == 10){
        showInfo.innerText = 'Storage is full';
    } else {
        showInfo.innerText = 'Invalid Input';
    }
    input.value = '';
});



