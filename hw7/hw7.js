//  - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//  створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [];
users[0] = new User(1, "bohdan", 'pankiv', true, 38089)
users[1] = new User(2, "pavlo", 'gavrishko', true, 38089)
users[2] = new User(3, "kilia", 'sakulich', false, 38089)
users[3] = new User(4, "taras", 'mikitsey', false, 38089)
users[4] = new User(5, "roman", 'panko', true, 38089)
users[5] = new User(6, "ilona", 'bond', false, 38089)
users[6] = new User(7, "vika", 'parfan', true, 38089)
users[7] = new User(8, "olga", 'sliusarchuk', true, 38089)
users[8] = new User(9, "kate", 'gensar', false, 38089)
users[9] = new User(10, "inesa", 'semianiv', true, 38089)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(value => value.id % 2 === 0));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((a, b) => a.id - b.id));
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let clients = [];
clients.push(new Client(1, 'bohdan', 'pankiv', true, 132,['phone', 'car', 'house']))
clients.push(new Client(2, 'pavlo', 'gavrishko', false, 136, ['phone', 'car', 'house', 'gym']))
clients.push(new Client(3, 'kilia', 'sakulich', true, 245, ['car', 'house']))
clients.push(new Client(4, 'taras', 'mikitsey', false, 654, ['car', 'house', 'cat', 'instrument', 'honey', 'milk']))
clients.push(new Client(5, 'roman', 'panko', true, 542, ['phone']))
clients.push(new Client(6, 'ilona', 'bond', true, 857, ['phone', 'car', 'ring']))
clients.push(new Client(7, 'olga', 'sliusarchuk', false, 987, ['phone', 'car', 'ring', 'dress']))
clients.push(new Client(8, 'kate', 'gensar', true, 987, ['children']))
clients.push(new Client(9, 'inesa', 'semianiv', true,358,  ['phone', 'watch', 'ring']))
clients.push(new Client(10, 'vika', 'partan', true, 991, ['pasport']))
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((a, b) => a.order.length - b.order.length));
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, producer, startYear, maxSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.startYear = startYear;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive =function () {
        console.log(`we go with speed ${maxSpeed}`);
    }
    this.info = function () {
        console.log(`model - ${model}\nproducer - ${producer}\nstartYear - ${startYear}\nengineCapacity - ${engineCapacity}`)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }
    this.changeYear = function  (newValue) {
        this.startYear = newValue;
    }
    this.addDriver = function (driver) {
        this.drive = driver;
    }
}
let car = new Car("ferari", "italy", 1810, 320, 50);
car.drive();
car.info();
car.increaseMaxSpeed(20);
console.log(car);
car.changeYear(2020);
console.log(car);
car.addDriver({name: 'ivan', age: 25, hasDriveInfo: true});
console.log(car);
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car1{

    constructor(model, producer, startYear, maxSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.startYear = startYear;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive(){
        console.log(`we go with speed ${this.maxSpeed}`);
    }
    info () {
        console.log(`model - ${this.model}\nproducer - ${this.producer}\nstartYear - ${this.startYear}\nengineCapacity - ${this.engineCapacity}`)
    }
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed += newSpeed;
    }
    changeYear (newValue) {
        this.startYear = newValue;
    }
    addDriver (driver) {
        this.drive = driver;
    }
}
let car1 = new Car1('bmw', 'germany', 1945, 200, 150);
car1.drive();
car1.info();
car1.increaseMaxSpeed(10);
console.log(car1);
car1.changeYear(2010)
car1.addDriver({name: 'petro', age: 31, hasDriveLicence: true});
console.log(car1);
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
function Popeliushka(name, age, legSize) {
    this.name = name;
    this.age = age;
    this.legSize = legSize;
}
function Prints(name, age, findShou) {
    this.name = name;
    this.age = age;
    this.findShou = findShou;
}
let poleliushkas = [];
poleliushkas.push("ira", 18, 38);
poleliushkas.push("olia", 20, 40);
poleliushkas.push("vika", 19, 39);
poleliushkas.push("maria", 21, 39);
poleliushkas.push("katia", 22, 38);
poleliushkas.push("ilona", 25, 37);
poleliushkas.push("sofia", 27, 41);
poleliushkas.push("kristina", 25, 36);
poleliushkas.push("alina", 23, 37);
poleliushkas.push("nastia", 30, 39);
console.log(poleliushkas.filter(value => value.legSize === printsBohdan.findShou));
console.log(poleliushkas.find(value => value.legSize === printsBohdan.findShou));