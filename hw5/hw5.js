// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const rectangleSquare = (a, b) => a * b;
console.log(rectangleSquare(2, 5));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
const circleSquare = (r) => Math.PI * Math.pow(r, 2);
console.log(circleSquare(4));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const cilinderSquare = (h, r) => 2 * Math.PI * r * (h + r);
console.log(cilinderSquare(2, 18));
// - створити функцію яка приймає масив та виводить кожен його елемент
const printArr = (arrays) => {
    for (const arr of arrays) {
        console.log(arr);
    }
}
printArr(["hello world", 5, true]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const creatParagraph = (text) => {
    document.write(`<p>${text}</p>`);
}
creatParagraph("hello world");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const creatUlWithLi1 = (text) => {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}
creatUlWithLi1("hello world");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const creatUlWithLi2 = (text, count) => {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const creatLiFromArr = (arrays) => {
    document.write(`<ul>`);
    for (let array of arrays) {
        document.write(`<li>${array}</li>`);
    }
    document.write(`</ul>`);
}
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const arrayOfObject = (arrays) => {
    document.write(`<div>`);
    for (let array of arrays) {
        document.write(`<p>${array.id}</p>`)
        document.write(`<p>${array.name}</p>`)
        document.write(`<p>${array.age}</p>`)
    }
    document.write(`</div>`);
}
arrayOfObject([{id: 1, name: 'bohdan', age: 27}, {id: 2, name: 'olia', age: 20}]);
// - створити функцію яка повертає найменьше число з масиву
const minNumberOfArr = (arrays) => {
    let min = arrays[0];
    for (let array of arrays) {
        if (array < min) {
            min = array;
        }
    }
    return min;
}

console.log(minNumberOfArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum = (arr) => {
    let sum = 0;
    for (let arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}

console.log(sum([2, 4, 6, 8]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
let arr = [11, 22, 33, 44];
swap(arr, 0, 1);
printArr(arr);
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (let currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            return sumUAH / currencyValue.value;
        }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));
