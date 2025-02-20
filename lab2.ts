//Вариант 6

//1.1

const findMinPositive = (arr: number[]): number => {
    let minPositive = arr[0];

    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] < minPositive && arr[i] > 0) {
            minPositive = arr[i];
        }
    }

    return minPositive;
}

const arr1: number[] = [-101,41,1403,1,691,123,567,41,1]

const minPositive = findMinPositive(arr1);
console.log(minPositive);


//1.2

const stringToBoolean = (matrix: string[][]): boolean[][] => {
    if (!matrix || matrix.length === 0) {
      return [];
    }
  
    const booleanMatrix: boolean[][] = matrix.map(row => {
      return row.map(str => {
        return str.length % 2 !== 0;
      });
    });
  
    return booleanMatrix;
  }
  
  const stringMatrix: string[][] = [
    ["hello", "world", "foo"],
    ["bar", "typescript", "js"],
    ["a", "bb", "ccc"]
  ];
  
  const booleanMatrix: boolean[][] = stringToBoolean(stringMatrix);
  console.log(booleanMatrix);

//2

const sumOfDigits = (num: number): number => {
    return num.toString()
              .split('')
              .reduce((sum, digit) => sum + Number(digit), 0);
}

const isSumsEquals = (tuple: [number, number]): boolean => {
    const [firstNumber, secondNumber] = tuple;
    const sum1 = sumOfDigits(firstNumber);
    const sum2 = sumOfDigits(secondNumber);
    
    return sum1 === sum2;
}

const tuple: [number, number] = [41, 23];

console.log(isSumsEquals(tuple));

//3

enum RNABase {
    Adenine = 'A',
    Guanine = 'G',
    Cytosine = 'C',
    Uracil = 'U'
};

const acid: RNABase = RNABase.Uracil;
console.log(acid);

//4

class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}

function printPetInfo<T extends Pet>(pet: T) {
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

//5

type BaseInfo = {
    base: RNABase;
    name: string;
    carbonAtoms: number;
}

const rnaBases: BaseInfo = {
    base: RNABase.Uracil,
    name: "Uracil",
    carbonAtoms: 4,
}

console.log(JSON.stringify(rnaBases, null, 2));