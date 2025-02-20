"use strict";
//Вариант 6
//1.1
const findMinPositive = (arr) => {
    let minPositive = arr[0];
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] < minPositive && arr[i] > 0) {
            minPositive = arr[i];
        }
    }
    return minPositive;
};
const arr1 = [-101, 41, 1403, 1, 691, 123, 567, 41, 1];
const minPositive = findMinPositive(arr1);
console.log(minPositive);
//1.2
const stringToBoolean = (matrix) => {
    if (!matrix || matrix.length === 0) {
        return [];
    }
    const booleanMatrix = matrix.map(row => {
        return row.map(str => {
            return str.length % 2 !== 0;
        });
    });
    return booleanMatrix;
};
const stringMatrix = [
    ["hello", "world", "foo"],
    ["bar", "typescript", "js"],
    ["a", "bb", "ccc"]
];
const booleanMatrix = stringToBoolean(stringMatrix);
console.log(booleanMatrix);
//2
const sumOfDigits = (num) => {
    return num.toString()
        .split('')
        .reduce((sum, digit) => sum + Number(digit), 0);
};
const isSumsEquals = (tuple) => {
    const [firstNumber, secondNumber] = tuple;
    const sum1 = sumOfDigits(firstNumber);
    const sum2 = sumOfDigits(secondNumber);
    return sum1 === sum2;
};
const tuple = [41, 23];
console.log(isSumsEquals(tuple));
//3
var RNABase;
(function (RNABase) {
    RNABase["Adenine"] = "A";
    RNABase["Guanine"] = "G";
    RNABase["Cytosine"] = "C";
    RNABase["Uracil"] = "U";
})(RNABase || (RNABase = {}));
;
const acid = RNABase.Uracil;
console.log(acid);
//4
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function printPetInfo(pet) {
    console.log(`Type: ${pet.constructor.name}`);
    console.log(`Name: ${pet.name}`);
    console.log(`Age: ${pet.age}`);
    console.log(`Speak: ${pet.speak()}`);
}
const myDog = new Dog();
const myCat = new Cat();
console.log("-----------Dog-----------");
printPetInfo(myDog);
console.log("-----------Cat-----------");
printPetInfo(myCat);
const rnaBases = {
    base: RNABase.Uracil,
    name: "Uracil",
    carbonAtoms: 4,
};
console.log(JSON.stringify(rnaBases, null, 2));
