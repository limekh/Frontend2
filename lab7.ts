import { Transport } from "./transport7.js";

import Car = Transport.Car;
import Owner = Transport.Owner;

const myself: Owner = new Owner(
    "Milekhin",
    "Alexander",
    "Nikolaevich",
    "23.11.2005",
    Transport.DocType.passport,
    3619,
    880055
);

const andrey: Owner = new Owner(
    "Preobr",
    "Andr",
    "Alexandrovich",
    "11.01.2006",
    Transport.DocType.passport,
    3620,
    880055
)

const car1: Car = new Car(
    "LADA",
    "Granta",
    2020,
    "NEZNAYUVIN190225",
    140305,
    myself,
    Transport.BodyType.Hatchback,
    Transport.CarClass.Economy
)

const car2: Car = new Car(
    "Mitsubishi",
    "Lancer IX",
    2022,
    "5UXCR6C53M9F20939",
    67890,
    andrey,
    Transport.BodyType.Sedan,
    Transport.CarClass.Standard
)

const car3: Car = new Car(
    "Audi",
    "A4",
    2021,
    "WAUZB4FF4FN012345",
    11223,
    myself,
    Transport.BodyType.Hatchback,
    Transport.CarClass.Standard
)

const car4: Car = new Car(
    "Lada",
    "Vesta",
    2015,
    "XTAGFL110KY313115",
    44321,
    andrey,
    Transport.BodyType.Sedan,
    Transport.CarClass.Standard
)

const car5: Car = new Car(
    "Mitsubishi",
    "Outlander",
    2021,
    "JA4AD31G2MZ012345",
    543210,
    myself,
    Transport.BodyType.Coupe,
    Transport.CarClass.Luxury
)

const vehicleStorage: Transport.VehicleStorage<Car> = new Transport.VehicleStorage<Car>([car1, car2, car3, car4, car5]);

console.log(vehicleStorage.sortByBrand());

console.log(vehicleStorage.getVehicleByBrand("Mitsubishi"));

console.log(car1.getShortInfo());