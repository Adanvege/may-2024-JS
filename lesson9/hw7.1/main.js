let div = document.createElement('div')
div.classList.add('wrap','collapse','alpha','beta')
div.style.backgroundColor = 'red'
div.style.height = '20vh'
div.style.fontSize = '52px'
div.style.color = 'black'
document.body.appendChild(div)
let divClone=div.cloneNode(true)
document.body.appendChild(divClone)

let objects=['Main','Products','About us','Contacts']
let ul= document.createElement('ul')
document.body.appendChild(ul)
for (const Element of objects) {
    let li = document.createElement('li')
    ul.appendChild(li)
    li.innerText=Element
}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let block = document.createElement('div')
    let h2=document.createElement('h2')
    let p=document.createElement('p')
    document.body.appendChild(block)
    block.appendChild(h2)
    block.appendChild(p)
    h2.innerText=coursesAndDurationArrayElement.title
    p.innerText=coursesAndDurationArrayElement.monthDuration
}

let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const coursesAndDurationArrayElement of coursesAndDurationArray1) {
    let block = document.createElement('div')
    let h1=document.createElement('h1')
    let p=document.createElement('p')
    document.body.appendChild(block)
    block.classList.add('item')
    block.appendChild(h1)
    h1.classList.add('heading')
    block.appendChild(p)
    p.classList.add('description')
    h1.innerText=coursesAndDurationArrayElement.title
    p.innerText=coursesAndDurationArrayElement.monthDuration
}


