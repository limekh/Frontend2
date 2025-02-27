"use strict";
//2 var
//1
function getCurrentDate() {
    console.log(Date.now());
}
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(getCurrentDate, 10000);
});
//2
function multiply(num1) {
    return function (num2) {
        return num1 * num2;
    };
}
const multiply23 = multiply(23);
const multiply12 = multiply23(12);
console.log(multiply12);
