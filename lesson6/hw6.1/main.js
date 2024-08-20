let hlwrd = 'hello world'
let lrmips = 'lorem ipsum'
let jscool = 'javascript is cool'
console.log(hlwrd.length, lrmips.length, jscool.length)
console.log(hlwrd.toUpperCase(), lrmips.toUpperCase(), jscool.toUpperCase())
let hlwrd1 = 'HELLO WORLD'
let lrmips1 = 'LOREM IPSUM'
let jscool1 = 'JAVASCRIPT IS COOL'
console.log(hlwrd1.toLowerCase(), lrmips1.toLowerCase(), jscool1.toLowerCase())
let str = ' dirty string   '
console.log(str.trim())

function stringToarray(str){
    let arr=str.split(' ')
    return arr
}

let str1 = 'Ревуть воли як ясла повні';
let arr = stringToarray(str1);
console.log(arr)

let numarr=[10,8,-7,55,987,-1011,0,1050,0]
numarr = numarr.map(function (element){
    return element.toString()
})
console.log(numarr)

function sortNums(array,direction){
    for (let i = 0; i < array.length; i++) {
        let moved=false
        for (let j = 0; j < array.length; j++) {
            if(direction ==='ascending'){
                if (array[i]<array[j]){
                    let temp=array[i]
                    array[i]=array[j]
                    array[j]=temp
                    moved=true
                }else if (moved===true) {
                    break
                }
            }else if(direction==='descending'){
                if (array[i]>array[j]){
                    let temp=array[i]
                    array[i]=array[j]
                    array[j]=temp
                    moved=true
                }else if (moved===true) {
                    break
                }
            }
        }
    }
    return array
}
let nums = [3, 7, 12, 5, 9, 14, 2, 8, 1, 11, 6, 10, 4, 13, 15];
console.log(sortNums(nums,'ascending'))
console.log(sortNums(nums,'descending'))

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.sort((course1,course2)=>{
    return course1.monthDuration - course2.monthDuration
})
console.log(coursesAndDurationArray)
console.log(coursesAndDurationArray.filter(value => value.monthDuration>5))
let coursesID=coursesAndDurationArray.map((course,index)=>{
    let obj={
        id:index+1,
        title:course.title,
        monthDuration:course.monthDuration,
    }
    return obj
})
console.log(coursesID)

let cards=[
    {cardsuid:'spade',value:6,color:'black'},
    {cardsuid:'spade',value:7,color:'black'},
    {cardsuid:'spade',value:8,color:'black'},
    {cardsuid:'spade',value:9,color:'black'},
    {cardsuid:'spade',value:10,color:'black'},
    {cardsuid:'spade',value:'ace',color:'black'},
    {cardsuid:'spade',value:'jack',color:'black'},
    {cardsuid:'spade',value:'queen',color:'black'},
    {cardsuid:'spade',value:'king',color:'black'},
    {cardsuid:'clubs',value:6,color:'black'},
    {cardsuid:'clubs',value:7,color:'black'},
    {cardsuid:'clubs',value:8,color:'black'},
    {cardsuid:'clubs',value:9,color:'black'},
    {cardsuid:'clubs',value:10,color:'black'},
    {cardsuid:'clubs',value:'ace',color:'black'},
    {cardsuid:'clubs',value:'jack',color:'black'},
    {cardsuid:'clubs',value:'queen',color:'black'},
    {cardsuid:'clubs',value:'king',color:'black'},
    {cardsuid:'diamond',value:6,color:'red'},
    {cardsuid:'diamond',value:7,color:'red'},
    {cardsuid:'diamond',value:8,color:'red'},
    {cardsuid:'diamond',value:9,color:'red'},
    {cardsuid:'diamond',value:10,color:'red'},
    {cardsuid:'diamond',value:'ace',color:'red'},
    {cardsuid:'diamond',value:'jack',color:'red'},
    {cardsuid:'diamond',value:'queen',color:'red'},
    {cardsuid:'diamond',value:'king',color:'red'},
    {cardsuid:'heart',value:6,color:'red'},
    {cardsuid:'heart',value:7,color:'red'},
    {cardsuid:'heart',value:8,color:'red'},
    {cardsuid:'heart',value:9,color:'red'},
    {cardsuid:'heart',value:10,color:'red'},
    {cardsuid:'heart',value:'ace',color:'red'},
    {cardsuid:'heart',value:'jack',color:'red'},
    {cardsuid:'heart',value:'queen',color:'red'},
    {cardsuid:'heart',value:'king',color:'red'},
]

ace=cards.filter(cardsu=>cardsu.cardsuid==='spade'&&cardsu.value==='ace')
console.log(ace)

six=cards.filter(cardval=>cardval.value===6)
console.log(six)
console.log(cards.filter(card=>card.color==='red'))
console.log(cards.filter(card=>card.cardsuid==='diamond'))

function isClubsAndBigerNine(card){
    if(card.value>=9 && card.cardsuid==='clubs'){
        return true
    }else if (typeof card.value==='string' &&card.cardsuid==='clubs'){
        return true
    }else {
        return false
    }
    return false
}

console.log(cards.filter(isClubsAndBigerNine))
console.log(cards.reduce((accumulator,card)=>{
    if (card.cardsuid==='spade'){
        accumulator[0].push(card)
    }else if (card.cardsuid==='diamonds'){
        accumulator[1].push(card)
    }else if (card.cardsuid==='hearts'){
        accumulator[2].push(card)
    }else if (card.cardsuid==='clubs'){
        accumulator[3].push(card)
    }
    return accumulator
}, [[],[],[],[]],))

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

function modulesassfind(course){
    for (let i = 0; i < course.modules.length; i++) {
        if (course.modules[i]==='sass'){
                return true
        }
    }
    return false
}
function moduledockfind(course){
    for (let i = 0; i < course.modules.length; i++) {
        if (course.modules[i]==='docker'){
            return true
        }
    }
    return false
}

console.log(coursesArray.filter(modulesassfind))
console.log(coursesArray.filter(moduledockfind))