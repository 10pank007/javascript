let x = 50;
x !== 0 ? console.log("Вірно") : console.log("Невірно");

let time = 50;
if (time >= 0 && time <= 14) {
    console.log("first");
} else if (time > 14 && time <= 29) {
    console.log("second")
} else if (time > 29 && time <= 44) {
    console.log("third")
} else if (time > 44 && time <= 59) {
    console.log("third")
}

let day = 21;
if (day >= 1 && day <= 11) {
    console.log("first decade")
} else if (day > 11 && day <= 21) {
    console.log("second decade")
} else if (day > 21 && day <= 31) {
    console.log("third decade")
}

let dayOfWeek = 1;
switch (dayOfWeek) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
}

let number1 = 5;
let number2 = 8;
console.log(Math.max(number1, number2));


let x ;

if( typeof x === "undefined" || typeof x === "object"
    || typeof x === "number" || typeof x === "string"
    || typeof x ==="function" || typeof x ==="symbol"
    || typeof x === "bigint" || typeof x ==="null" || typeof x === 'NaN') {
    x = "default";
}



let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (let i = 0; i < coursesAndDurationArray.length; i++) {
    if(coursesAndDurationArray[i].monthDuration > 5) {
        console.log("Супер")
    }
}