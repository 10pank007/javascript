// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function squareRectangle(a, b) {
    return a * b;
}

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function squareCircle(r) {
    return Math.PI * Math.pow(r, 2);
}

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function squareСylinder(h, r) {
    return 2 * Math.PI * r(h + r);
}

// - створити функцію яка приймає масив та виводить кожен його елемент
function printArray() {
    for (const fromElement of Array.from(arguments)) {
        console.log(fromElement);
    }
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function pharagraph(text) {
    document.write(`<p>${text}<p/>`);

}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function creatUlWithLi(text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<ul/>`);
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function creatUlWithLiAnotheOne(text, count = 3) {
    document.write(`<ul>`)
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`<ul/>`)
}

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function listFromArr(arrays) {
    for (let array of arrays) {
        document.write(`<ul>`);
        document.write(`<li>${array}</li>`);
        document.write(`<ul/>`);
    }
}

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function arrayOfObject(arrays) {
    for (let array of arrays) {
        document.write(array.id);
        document.write(array.name);
        document.write(array.age);
    }
}

// - створити функцію яка повертає найменьше число з масиву
function minOfArray(arrays) {
    let min = arrays[0]
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i] < min) {
            min = arrays[i];
        }
    }
    return min;
}

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let sum = a;
    for (let arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    for (let i = 0; i < arr.length; i++) {
        if (i === index1) {
            let temp = arr[i];
            arr[i] = arr[index2];
            arr[index2] = temp;
        }
    }
}
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    return sumUAH / currencyValues.value;
}