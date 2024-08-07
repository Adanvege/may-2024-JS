// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let word1 = 'Hello';
let word2 = 'owu';
let word3 = 'com';
let word4 = 'ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 2.7;
let num7 = 16;
let bool1 = true;
let bool2 = false;
console.log(word1);
console.log(word2);
console.log(word3);
console.log(word4);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);
console.log(bool1);
console.log(bool2);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName= 'Vladislav ';
let middleName= 'Sergeevich ';
let lastName= 'Bhan ';
console.log(lastName+firstName+middleName);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a=100;
let b='100';
let c=true;
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let firstName1= prompt('firstName')
let middleName1= prompt('middleName')
let lastName1= prompt('lastName')
console.log(lastName1+' '+firstName1+' '+middleName1);