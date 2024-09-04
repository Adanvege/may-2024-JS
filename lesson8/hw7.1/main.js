function deepcopy(obj,objToClone){
    if(objToClone){
        let temp=JSON.parse(JSON.stringify(objToClone))
        obj=temp
    }
    return obj
}

let user ={
    name:'Vasya',
    password:'12345',
    code:1421
}

let userClone= {}
userClone=deepcopy(userClone,user)
console.log(userClone===user)
console.log(userClone.name ===user.name)
userClone= {...user}
console.log(userClone===user)
console.log(userClone.name ===user.name)

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.map((course, index)=>({id:index+1,...course})));