let words=["Bibble", "Bumfuzzle", "Cattywampus", "Discombobulate", "Eellogofusciouhipoppokunurious",
    "Erf", "Flummox", "Gardyloo", "Gobbledegook", "Hullabaloo",
    "Impignorate", "Jabberwock", "Kakorrhaphiophobia", "Kerfuffle", "Lackadaisical",
    "Lamprophony", "Lollygag", "Nudiustertian", "Poppycock", "Ragamuffin",
    "Smeerp", "Snollygoster", "Thunder-plump", "Widdershins", "Xiphoid",
    "Yarborough", "Zenzizenzizenzic", "Agastopia", "Baboonery", "Cacodemonomania"]

// console.log(words)
let skip=0
let btn1=document.createElement('button')
let btn2=document.createElement('button')
let windowWords= document.createElement('div')
document.body.appendChild(windowWords)
document.body.appendChild(btn1)
btn2.style.marginLeft='2vh'
document.body.appendChild(btn2)
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
        windowWords.innerHTML=''
        for (let i = skip; i < skip+10; i++) {
            let addWordP=document.createElement('p')
            addWordP.innerText=words[i]
            windowWords.appendChild(addWordP)
        }
    }else{
        alert('Wrong')
        console.log(skip)
    }
}
btn2.onclick=function (){
    if (skip<words.length-10){
        skip+=10
        windowWords.innerHTML=''
        for (let i = skip; i < skip+10; i++) {
            let addWordP=document.createElement('p')
            addWordP.innerText=words[i]
            windowWords.appendChild(addWordP)
        }
    }else{
        alert('Wrong')
        console.log(skip)
    }
}

// if (skip>0){
//     skip-=10
//     for (let i=skip;i<10;i++){
//         let word=document.createElement('p')
//         word.innerText=words[i]
//         console.log(words[i])
//         windowWords.appendChild(word)
//     }
// }else{
//     alert('Wrong')
// }