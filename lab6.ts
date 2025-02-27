import { Transport } from "./transport6.js";

const owner = new Transport.Owner(
    "Milyokhin",
    "Alexandr",
    "Nikolaevich",
    "23.10.2005",
    Transport.DocType.passport,
    3619,
    5553535
);

const lada = new Transport.Car(
    "LADA",
    "Granta",
    2020,
    "NEZNAYUVIN190225",
    140305,
    owner,
    Transport.BodyType.Hatchback,
    Transport.CarClass.Economy
);

(lada as any).hello = "hello";
console.log((lada as any).hello);


console.log(lada.brand)