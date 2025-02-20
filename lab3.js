"use strict";
var DocType;
(function (DocType) {
    DocType["passport"] = "Passport";
    DocType["IDCard"] = "ID Card";
    DocType["birthCertificate"] = "birthCertificate";
})(DocType || (DocType = {}));
var BodyType;
(function (BodyType) {
    BodyType["Hatchback"] = "Hatchback";
    BodyType["Coupe"] = "Coupe";
    BodyType["Sedan"] = "Sedan";
})(BodyType || (BodyType = {}));
var CarClass;
(function (CarClass) {
    CarClass["Economy"] = "Economy";
    CarClass["Standard"] = "Standard";
    CarClass["Luxury"] = "Luxury";
})(CarClass || (CarClass = {}));
class Owner {
    constructor(surname, name, patronymic, birthDate, docType, docSeries, docNum) {
        this._surname = surname;
        this._name = name;
        this._patronymic = patronymic;
        this._birthDate = birthDate;
        this._docType = docType;
        this._docSeries = docSeries;
        this._docNum = docNum;
    }
    get surname() {
        return this._surname;
    }
    get name() {
        return this._name;
    }
    get patronymic() {
        return this._patronymic;
    }
    get birthDate() {
        return this._birthDate;
    }
    get docType() {
        return this._docType;
    }
    get docSeries() {
        return this._docSeries;
    }
    get docNum() {
        return this._docNum;
    }
    print() {
        console.log(`Фамилия: ${this.surname}`);
        console.log(`Имя ${this.name}`);
        console.log(`Отчество: ${this.patronymic}`);
        console.log(`Дата рождения: ${this.birthDate}`);
        console.log(`Тип документа: ${this.docType}`);
        console.log(`Номер документа: ${this.docNum}`);
    }
}
class Vehicle {
    print() {
        console.log(`Брэнд: ${this._brand}`);
        console.log(`Модель: ${this._model}`);
        console.log(`Год выпуска: ${this._releaseYear}`);
        console.log(`VIN: ${this._VIN}`);
        console.log(`Регистрационный номер: ${this._regNumber}`);
    }
    constructor(brand, model, releaseYear, VIN, regNumber, owner) {
        this._brand = brand;
        this._model = model;
        this._releaseYear = releaseYear;
        this._VIN = VIN;
        this._regNumber = regNumber;
        this._owner = owner;
    }
    get brand() {
        return this._brand;
    }
    get model() {
        return this._model;
    }
    get releaseYear() {
        return this._releaseYear;
    }
    get VIN() {
        return this._VIN;
    }
    get regNumber() {
        return this._regNumber;
    }
    get owner() {
        return this._owner;
    }
}
class Car {
    constructor(brand, model, releaseYear, VIN, regNumber, owner, bodyType, carClass) {
        this._brand = brand;
        this._model = model;
        this._releaseYear = releaseYear;
        this._VIN = VIN;
        this._regNumber = regNumber;
        this._owner = owner;
        this._bodyType = bodyType;
        this._carClass = carClass;
    }
    print() {
        console.log(`Брэнд: ${this._brand}`);
        console.log(`Модель: ${this._model}`);
        console.log(`Год выпуска: ${this._releaseYear}`);
        console.log(`VIN: ${this._VIN}`);
        console.log(`Регистрационный номер: ${this._regNumber}`);
        console.log(`Тип кузова: ${this._bodyType}`);
        console.log(`Класс автомобиля: ${this._carClass}`);
    }
    get brand() {
        return this._brand;
    }
    get model() {
        return this._model;
    }
    get releaseYear() {
        return this._releaseYear;
    }
    get VIN() {
        return this._VIN;
    }
    get regNumber() {
        return this._regNumber;
    }
    get owner() {
        return this._owner;
    }
    get bodyType() {
        return this.bodyType;
    }
    get carClass() {
        return this._carClass;
    }
}
class Motorbike {
    constructor(brand, model, releaseYear, VIN, regNumber, owner, frameType, isSport) {
        this._brand = brand;
        this._model = model;
        this._releaseYear = releaseYear;
        this._VIN = VIN;
        this._regNumber = regNumber;
        this._owner = owner;
        this._frameType = frameType;
        this._isSport = isSport;
    }
    print() {
        console.log(`Брэнд: ${this._brand}`);
        console.log(`Модель: ${this._model}`);
        console.log(`Год выпуска: ${this._releaseYear}`);
        console.log(`VIN: ${this._VIN}`);
        console.log(`Регистрационный номер: ${this._regNumber}`);
        console.log(`Тип рамы: ${this._frameType}`);
        console.log(`Подходит ли для спорта: ${this._isSport}`);
    }
    get brand() {
        return this._brand;
    }
    get model() {
        return this._model;
    }
    get releaseYear() {
        return this._releaseYear;
    }
    get VIN() {
        return this._VIN;
    }
    get regNumber() {
        return this._regNumber;
    }
    get owner() {
        return this._owner;
    }
    get frameType() {
        return this._frameType;
    }
    get isSport() {
        return this._isSport;
    }
}
class VehicleStorage {
    constructor() {
        this._creationDate = new Date();
        this._vehicles = [];
    }
    getAllVehicle() {
        return this._vehicles;
    }
    addVehicle(vehicle) {
        this._vehicles.push(vehicle);
    }
    get creationDate() {
        return this._creationDate;
    }
    get vehicles() {
        return this._vehicles;
    }
}
