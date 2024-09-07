let form1=document.forms.form1
console.log(form1[0])
let button=form1[0]
let block = document.getElementById('text')

form1.addEventListener('submit',function (eventObject){
    eventObject.preventDefault();

})

console.log(block)
button.onclick = function (){
    block.classList.toggle('block-hide')
    block.classList.toggle('black-block')
    console.log(block)
}

let ageCheck=document.forms.ageCheck
ageCheck.addEventListener('submit',function (eventObject){
    eventObject.preventDefault();

})
let button2=ageCheck[1]
button2.onclick = function (){
    let age= ageCheck[0].value
    if (age<18){
        alert('MINOR SPOTTED')
    }
    else {
        alert('Not Minor')
    }

}

let person=document.forms.person
person.addEventListener('submit',function (eventObject){
    eventObject.preventDefault();

})

let button3=person[3]
button3.onclick = function (){
    let name= person[0].value
    let surname= person[1].value
    let age= person[2].value
    let text = document.createElement('p')
    text.innerText=name+' '+surname+' '+age
    person.appendChild(text)
}


const block1 = document.getElementsByTagName("div")[1]
// let curNum= parseInt(localStorage.getItem('number')) || 0;
let curNum= +localStorage.getItem('number') || 0;
console.log(curNum)
curNum+=1
localStorage.setItem('number',curNum)
block1.innerText=curNum


let convert=document.forms.convert
let kg=convert[0];
let converted = document.createElement("p")
converted.style.fontSize='50px'
converted.style.margin='0'
document.body.appendChild(converted)

kg.onkeyup = function (){

    converted.innerText=kg.value*2.2
    console.log(converted.innerText)

}

function addToLocalStorage(localStorageArray,obj){
    let arr=[];
    if (localStorage.getItem(localStorageArray))
    {
        arr=JSON.parse((localStorage.getItem(localStorageArray)))
    }
    arr.push(obj)
    console.log(arr)
    localStorage.setItem(localStorageArray,JSON.stringify(arr))
}

addToLocalStorage('arr','XXXXXXX')
addToLocalStorage('arr','YYYYYYY')


//=================

let rowsNum= document.createElement('input')
rowsNum.id='rowsNum'
let boxesNum= document.createElement('input')
boxesNum.id='boxesNum'
let boxContent = document.createElement('input')
boxContent.id='boxContent'
let divInput=document.createElement('div')
document.body.appendChild(divInput)

divInput.style.display='flex'
divInput.style.flexDirection='column'
divInput.style.width='15vw'
divInput.appendChild(rowsNum)
divInput.appendChild(boxesNum)
divInput.appendChild(boxContent)
let tableButton=document.createElement('button')
tableButton.innerText='Create Table'
divInput.appendChild(tableButton)
let table = document.createElement('table')
document.body.appendChild(table)
tableButton.onclick=function (){
    let rowsN=parseInt(rowsNum.value)
    let boxesN=parseInt(boxesNum.value)
    let boxesC= boxContent.value
    // for (let i=0;i<rowsN;i++) {
    //     let tr = document.createElement('tr')
    //     for (let j = 0; j < boxesN; j++) {
    //         let td= document.createElement('td')
    //         td.innerText=boxesC
    //         tr.appendChild(td)
    //     }
    //     table.appendChild(tr)
    // }

    boxesC=boxesC.split(' ')

    let elementContent=0
    for (let i=0;i<rowsN;i++) {

        let tr = document.createElement('tr')
        for (let j = 0; j < boxesN; j++) {
            let td= document.createElement('td')
            td.innerText= boxesC[elementContent]
            elementContent++
            tr.appendChild(td)
            if (elementContent==boxesC.length)
            {
                console.log('a')
                break
            }
        }
        table.appendChild(tr)
        if (elementContent==boxesC.length)
        {
            console.log('a')
            break
        }
    }

}

//==========


let money= +localStorage.getItem('money')
let moneyPlusTen=0
console.log(money)
let moneyVal = document.createElement("div")
moneyVal.innerText=money
document.body.appendChild(moneyVal)
setTimeout(function (){
    if (money>=moneyPlusTen){
        moneyPlusTen=money+10
    }
    localStorage.setItem('money',moneyPlusTen)

},10000)
console.log(moneyPlusTen)

//========================
let words=["Bibble", "Bumfuzzle", "Cattywampus", "Discombobulate", "Eellogofusciouhipoppokunurious",
    "Erf", "Flummox", "Gardyloo", "Gobbledegook", "Hullabaloo",
    "Impignorate", "Jabberwock", "Kakorrhaphiophobia", "Kerfuffle", "Lackadaisical",
    "Lamprophony", "Lollygag", "Nudiustertian", "Poppycock", "Ragamuffin",
    "Smeerp", "Snollygoster", "Thunder-plump", "Widdershins", "Xiphoid",
    "Yarborough", "Zenzizenzizenzic", "Agastopia", "Baboonery", "Cacodemonomania"]

console.log(words)
let skip=0
let btn1=document.createElement('button')
let btn2=document.createElement('button')
let windowWords= document.createElement('div')
document.body.appendChild(windowWords)
windowWords.appendChild(btn1)
windowWords.appendChild(btn2)
windowWords.style.marginTop='5vh'
for (let i=0;i<10;i++){
    let word=document.createElement('p')
    word.innerText=words[i]
    console.log(words[i])
    windowWords.appendChild(word)
}
btn1.innerText='prev'
btn2.innerText='next'
btn1.onclick=function (){
    if (skip>0){
        skip-=10
        for (let i=skip;i<10;i++){
            let word=document.createElement('p')
            word.innerText=words[i]
            console.log(words[i])
            windowWords.appendChild(word)
        }
    }else{
        alert('Wrong')
    }
}
btn1.onclick=function (){
    if (skip!=words.length){
        skip+=10
        for (let i=skip;i<10;i++){
            let word=document.createElement('p')
            word.innerText=words[i]
            console.log(words[i])
            windowWords.appendChild(word)
        }
    }else{
        alert('Wrong')
    }
}