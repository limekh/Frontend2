const myself = new Transport.Owner(
    "Milyokhin",
    "Alexandr",
    "Nikolaevich",
    "23.10.2005",
    Transport.DocType.passport,
    3619,
    5553535
);

const myCar = new Transport.Car(
    "LADA",
    "Granta",
    2020,
    "NEZNAYUVIN190225",
    140305,
    myself,
    Transport.BodyType.Hatchback,
    Transport.CarClass.Economy
)

myCar.print();