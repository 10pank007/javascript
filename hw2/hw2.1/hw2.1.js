// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [1, 2, 3, true, false, "okten", 8.5, {id:2, name: "football"}, [1], [2, 5]];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Я, Побєда і Берлін',
    pageCount: 300,
    genre: "комедія"
}
let book2 = {
    title: 'Кобзар',
    pageCount: 400,
    genre: "поезія"
}
let book3 = {
    title: 'Чорний ворон',
    pageCount: 500,
    genre: "роман"
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let anotherBook1 = {
    title: 'Я, Побєда і Берлін',
    pageCount: 300,
    genre: "комедія",
    author: [{name : "Кузьма"}, {age : 46}]
}
let anotherBook2 = {
    title: 'Кобзар',
    pageCount: 400,
    genre: "поезія",
    author: [{name : "Шевченко"}, {age : 47}]
}
let anotherBook3 = {
    title: 'Чорний ворон',
    pageCount: 500,
    genre: "поезія",
    author: [{name : "Шкляр"}, {age : 72}]
}
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: "ivan", username: "ivanenko", password: 123},
    {name: "volodumur", username: "volodumurko", password: 456},
    {name: "petro", username: "petrenko", password: 789},
    {name: "stepan", username: "stepanenko", password: 246},
    {name: "mihailo", username: "mihailenko", password: 468},
    {name: "olia", username: "sliusarchuk", password: 357},
    {name: "valentina", username: "vozniak", password: 579},
    {name: "sofia", username: "kyfruk", password: 100},
    {name: "lilia", username: "glozyk", password: 987},
    {name: "ira", username: "lazarovych", password: 321}
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 50;
x !== 0 ? console.log("Вірно") : console.log("Невірно");
let a = 1;
a !== 0 ? console.log("Вірно") : console.log("Невірно");
let b = 0;
b !== 0 ? console.log("Вірно") : console.log("Невірно");
let c = -3;
c !== 0 ? console.log("Вірно") : console.log("Невірно");
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 50;
if (time >= 0 && time <= 14) {
    console.log("first part");
} else if (time > 14 && time <= 29) {
    console.log("second part")
} else if (time > 29 && time <= 44) {
    console.log("third part")
} else if (time > 44 && time <= 59) {
    console.log("fourth part")
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 21;
if (day >= 1 && day <= 11) {
    console.log("first decade")
} else if (day > 11 && day <= 21) {
    console.log("second decade")
} else if (day > 21 && day <= 31) {
    console.log("third decade")
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
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
    default:
        console.log("?????");
        break;
}
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let number1 = 5;
let number2 = 8;
if(number1 === number2) {
    console.log(number1);
} else if(number1 > number2) {
    console.log(number1);
} else {
    console.log(number2);
}
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let variable = prompt("write some data");
if (typeof variable === "undefined" || typeof variable === "object"
    || typeof variable === "number" || typeof variable === "string"
    || typeof variable === "null" || typeof variable === 'NaN') {
    variable = "default";
}
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log("Супер")
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log("Супер")
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log("Супер")
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log("Супер")
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log("Супер")
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log("Супер")
}