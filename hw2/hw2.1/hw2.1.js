let arr = [1, 2, 3, true, false, "okten", 8.5, {id:2, name: "football"}, [1], [2, 5]];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}



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


let anotherBook1 = {
    title: 'Я, Побєда і Берлін',
    pageCount: 300,
    genre: "комедія",
    author: [name = "Кузьма", age = 46]
}
let anotherBook2 = {
    title: 'Кобзар',
    pageCount: 400,
    genre: "поезія",
    author: [name = "Шевченко", age = 47]
}
let anotherBook3 = {
    title: 'Чорний ворон',
    pageCount: 500,
    genre: "поезія",
    author: [name = "Шкляр", age = 72]
}


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
for (let i = 0; i < users.length; i++) {
    console.log(users[i].password)
}