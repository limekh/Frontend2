//2 var

//1
function getCurrentDate(): void {
    console.log(Date.now());
    }
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(getCurrentDate, 10000);
    });

//2
function multiply(num1: number) {
    return function(num2: number){
        return num1 * num2;
    }
}

const multiply23 = multiply(23);
const multiply12 = multiply23(12);

console.log(multiply12)
