'use strict';

/*
    JavaScript Basics
    Inderjeet Cheema

*/

class Contact {
    #name;
    #city;
    #email;
    constructor(name, city, email ) {
        this.#name = name;
        this.#city = city;
        this.#email = email;
    }

    set name(val){
        this.#name = val;
    }

    get name() {
        return this.#name;
    }

    set city(val){
        this.#city = val;
    }

    get city() {
        return this.#city;
    }

    set email(val){
        this.#email = val;
    }

    get email() {
        return this.#email;
    }

    getInfo(){
        return `${this.name} ${this.city} ${this.email} `;
    }
}

export {Contact};
