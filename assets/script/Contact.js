'use strict';

/*
    JavaScript Basics
    Inderjeet Cheema

*/

class Shape{
    constructor(name, color) {
        this._name = name;
        this._color = color;
    }

    getColor(){
        return this._color;
    }

    setColor(val){
        this._color = val;
    }

    getName(){
        return this._name;
    }

    setName(val){
        this._name = val;
    }

    getInfo(){
        return `${this._color} ${this._name}`;
    }
}

export {Shape};
