// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, ullam.</div>`)
// }
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${i}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, ullam.</div>`)
// }
//
//
// let i=0
// while (i<20)
// {
//     document.write(`<div>While Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, ullam.</div>`)
//     i++
// }
//
// i=0
// while (i<=20)
// {
//     document.write(`<div>While ${i} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, ullam.</div>`)
//     i++
// }
//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// document.write(`<ul>`)
// for (const listOfItemsKey in listOfItems)
// {
//     document.write(`<li>${listOfItems[listOfItemsKey]}</li>`)
// }
// document.write(`</ul>`)

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://www.yogi-life.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FnZ9c4snS4ytPRImATDfl&w=640&q=75'
    },
];

for (const productsKey in products) {
    document.write(`<div class="product-card"><h3 class="product-title">${products[productsKey].title}. Price - ${products[productsKey].price}</h3> 
    <img src="${products[productsKey].image}" alt="" class="product-image"> </div>`)
}

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let usersTr = []
let usersFl = []
let usersThirty = []

for (const usersKey in users) {
    if (users[usersKey].status===true)
    {
        usersTr.push({name:users[usersKey].name,age:users[usersKey].age,status:users[usersKey].status}) //чому не працює \n
    }
    else if(users[usersKey].status===false)
    {
        usersFl.push({name:users[usersKey].name,age:users[usersKey].age,status:users[usersKey].status})
    }
    if(users[usersKey].age>30)
    {
        usersThirty.push({name:users[usersKey].name,age:users[usersKey].age,status:users[usersKey].status})
    }
}

for (const usersTrKey in usersTr) {
    document.write(usersTr[usersTrKey].name+" "+usersTr[usersTrKey].age+" "+usersTr[usersTrKey].status+", ")
}
document.write(`<div></div>`)
for (const usersFlKey in usersFl) {
    document.write(usersFl[usersFlKey].name+" "+usersFl[usersFlKey].age+" "+usersFl[usersFlKey].status+", ")
}
document.write(`<div></div>`)
for (const usersThirtyKey in usersThirty) {
    document.write(usersThirty[usersThirtyKey].name+" "+usersThirty[usersThirtyKey].age+" "+usersThirty[usersThirtyKey].status+", ")
}
