"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Button = /** @class */ (function () {
    function Button() {
    }
    Button.prototype.render = function () {
        console.log("I'm in Button class render metion");
    };
    Button.prototype.handleEvent = function () {
        console.log("I'm in Button class handleEvent metion");
    };
    return Button;
}());
var TextField = /** @class */ (function () {
    function TextField() {
    }
    TextField.prototype.render = function () {
        console.log("I'm in TextField class render metion");
    };
    TextField.prototype.handleEvent = function () {
        console.log("I'm in TextField class handleEvent metion");
    };
    return TextField;
}());
var Checkbox = /** @class */ (function () {
    function Checkbox() {
    }
    Checkbox.prototype.render = function () {
        console.log("I'm in Checkbox class render metion");
    };
    Checkbox.prototype.handleEvent = function () {
        console.log("I'm in Checkbox class handleEvent metion");
    };
    return Checkbox;
}());
var button = new Button();
button.render();
button.handleEvent();
var tf = new TextField();
tf.render();
tf.handleEvent();
var cb = new Checkbox();
cb.render();
cb.handleEvent();
