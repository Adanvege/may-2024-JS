function deepcopy(obj,objToClone){
    let arr=[]
    if(objToClone){
        for (const key in objToClone) {
            if(typeof objToClone[key]==='function'){
                // const fnclone=objToClone[key].bind({})
                const fnclone=objToClone[key]
                arr.push({fnclone,key})
            }
        }
        const temp=JSON.parse(JSON.stringify(objToClone))

        for (const arrKey of arr) {
            temp[arrKey.key]=arrKey.fnclone
        }
        return temp
    }
    throw Error('error')
}

let user ={
    name:'Vasya',
    password:'12345',
    code:1421,
    foo:()=>{},
    value:undefined,

}

let userClone= {}
userClone=deepcopy(userClone,user)
console.log(userClone)
userClone= {...user}
console.log(userClone)


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


