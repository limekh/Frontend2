//Вариант 6

//2

const remain = (num1:number, num2:number): number => {
    return num1 % num2;
}

console.log(remain(1403, 51))

//3

let isActive: boolean = true;

const age: number = 20;

const surname: string = "Snezhkin";

let info: any = {
    isActive: true,
    age: 20,
    surname: "Lobov",
    arr: [10, 20, 21, 35, 109]
};

const binarySet: boolean[] = [true, true, false, true];

let vec: [number, number, number] = [13, 2, -1];

//4

interface Entity {
    id: number;
}

interface ToJsonStringify extends
Entity {
e1?: number;
e2?: number;
}

const data: ToJsonStringify = {
id: 6,
e2: 28,
}

const jsonData: string = JSON.stringify(data);
console.log(jsonData);