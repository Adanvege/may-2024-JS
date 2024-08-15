let plosh = (a,b) => {
    return a*b;
}

let radius = (r) => {
    return 3.14*Math.sqrt(r);
}

let radiuscil = (r,h) =>{
    Sb=2*3.14*r*h;
    So=3.14*Math.sqrt(r);
    S=Sb+2*So
    return S;
}

let prall = (arr)=> {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

let docwrit = (text) =>{
    document.write(`<p>${text}</p>`)
}

let docwrit1 = (text,a) =>{
    document.write(`<div>`)
    document.write(`<ul>`)
    for (let i = 0; i < a; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
    document.write(`</div>`)
}

let docwrit2 = (arr) =>{
    document.write(`<div>`)
    document.write(`<ul>`)
    for (const textKey in arr) {
        document.write(`<li>${arr[textKey]}</li>`)
    }
    document.write(`</ul>`)
    document.write(`</div>`)
}

let docwrit3 = (arr) =>{
    for (const textKey in arr) {
        document.write(`<div>`)
        document.write(arr[textKey].id," ",arr[textKey].name," ",arr[textKey].age)
        document.write(`</div>`)
    }
}

let findmin = (arr) =>{
    let a=arr[0]
    for (let i = 0; i < arr.length-1; i++) {

        if (a>arr[i+1])
        {
            a=arr[i+1]
        }
    }
    return a;
}

let sum = (arr) =>{

    let sum=0
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i]
    }
    return sum;
}

let swap = (arr,indx1,indx2) =>{
    let temp=arr[indx1]
    arr[indx1]=arr[indx2]
    arr[indx2]=temp;
    return arr
}

let exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
    let dis
    for (const currencyValuesKey in currencyValues) {
        if (currencyValues[currencyValuesKey].curr==exchangeCurrency)
        {
            dis=currencyValues[currencyValuesKey].value
        }
    }
    let changed=sumUAH/dis;
    return changed;
}

let currency=[
    {curr:'USD',value:25},
    {curr:'EUR',value:42}
]



console.log(plosh(4,5))
console.log(radius(4))
console.log(radiuscil(4,5))
let arr1=[1,2,4,5,7,8,10]
let arr2=[1,'aaaa','12',23,true,'bbb']
prall(arr1)
docwrit("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
docwrit1("SomeText",3)
docwrit2(arr2)

let obj=[
    {id:1,name:'Bob',age:33},
    {id:2,name:'Bober',age:66}
]

let arrb=[42, 17, 89, 53, 76, 5, 31, 64, 10, 95, 23, 71, 38, 83, 49]

docwrit3(obj)
console.log(findmin(arrb))
console.log(sum(arr1))
console.log(swap(arr1,0,3))
console.log(exchange(10000,currency,'USD'))

