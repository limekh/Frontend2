"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transport6_js_1 = require("./transport6.js");
const owner = new transport6_js_1.Transport.Owner("Milyokhin", "Alexandr", "Nikolaevich", "23.10.2005", transport6_js_1.Transport.DocType.passport, 3619, 5553535);
const lada = new transport6_js_1.Transport.Car("LADA", "Granta", 2020, "NEZNAYUVIN190225", 140305, owner, transport6_js_1.Transport.BodyType.Hatchback, transport6_js_1.Transport.CarClass.Economy);
lada.hello = "hello";
console.log(lada.hello);
console.log(lada.brand);
