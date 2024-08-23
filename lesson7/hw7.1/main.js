function User(id,name,surname,email,phone){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
}

let user1= new User(1,'zaza','azaz','zaza@zq.com','+380649785')
let user2= new User(4,'asdas','zcv','zaza@zq.com','+380649785')
let user3= new User(3,'fdsds','zcvf','zaza@zq.com','+380649785')
let user4= new User(2,'adsggd','fdg','zaza@zq.com','+380649785')
let user5= new User(5,'grgg','hte','zaza@zq.com','+380649785')
let user6= new User(6,'fgdg','dfh','zaza@zq.com','+380649785')
let user7= new User(7,'fgxgc','ahr','zaza@zq.com','+380649785')
let user8= new User(8,'cxgcx','gsdfb','zaza@zq.com','+380649785')
let user9= new User(9,'cgsdfg','fgr','zaza@zq.com','+380649785')
let user10= new User(10,'sdfe','adsg','zaza@zq.com','+380649785')

let users=[user1,user2,user3,user4,user5,user6,user7,user8,user9,user10]
console.log(users)
console.log(users.filter(user=>user.id%2!=0))

console.log(users.sort((user1,user2)=>{
    return user1.id-user2.id;
}))

class Client{

    constructor(id,name,surname,email,phone){
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.phone=phone;
        this.order=[];
    }

    newOrder(order){
        this.order.push(order);
        return order
    }
}

client1= new Client(1,'zaza','azaz','zaza@zq.com','+380649785')
client1.newOrder('Headphones')
client2= new Client(2,'asdf','azaz','zaza@zq.com','+380649785')
client2.newOrder('Mouse')
client3= new Client(3,'xzvd','azaz','zaza@zq.com','+380649785')
client3.newOrder('Headphones')
client4= new Client(4,'grwd','azaz','zaza@zq.com','+380649785')
client4.newOrder('Mouse')
client5= new Client(5,'asdgr','azaz','zaza@zq.com','+380649785')
client5.newOrder('Headphones')
client5.newOrder('SSD')
client6= new Client(6,'cvsdf','azaz','zaza@zq.com','+380649785')
client6.newOrder('Mouse')
client7= new Client(7,'xcvzf','azaz','zaza@zq.com','+380649785')
client7.newOrder('Headphones')
client8= new Client(8,'aegr','azaz','zaza@zq.com','+380649785')
client8.newOrder('Mouse')
client9= new Client(9,'adsfx','azaz','zaza@zq.com','+380649785')
client9.newOrder('SD')
client10= new Client(10,'adfe','azaz','zaza@zq.com','+380649785')
client10.newOrder('SSD')

clients=[client1,client2,client3,client4,client5,client6,client7,client8,client9,client10]
console.log(clients)
console.log((clients.sort((client1,client2)=>{
    return client2.order.length-client1.order.length
})))

function Carfun(model,manufacturer,year,maxspeed,fuel){
    this.model=model;
    this.manufacturer=manufacturer;
    this.year=year;
    this.maxspeed=maxspeed;
    this.fuel=fuel;
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxspeed} на годину`)
    }

    this.info= function (){
        console.log(`Модель - ${this.model}`)
        console.log(`Виробник - ${this.manufacturer}`)
        console.log(`Рік - ${this.year}`)
        console.log(`Максимальна швидкість - ${this.maxspeed}`)
        console.log(`Об'єм двигуна - ${this.fuel}`)
    }

    this.increaseMaxSpeed = function (newSpeed){
        this.maxspeed=newSpeed
    }
    this.changeYear = function (newValue){
        this.year=newValue
    }
    this.addDriver = function (driver){
        this.driver=driver
    }
}

car=new Carfun('Pikador','Cheval',2008,160,80)
car.addDriver('Petya')
console.log(car)
car.changeYear(1999)
car.increaseMaxSpeed(800)
car.drive()
car.info()
console.log(car)

class Car{
    constructor(model,manufacturer,year,maxspeed,fuel) {
        this.model=model;
        this.manufacturer=manufacturer;
        this.year=year;
        this.maxspeed=maxspeed;
        this.fuel=fuel
    }

    drive(){
        console.log(`Їдемо зі швидкістю ${this.maxspeed} на годину`)
    }

    info(){
        console.log(`Модель - ${this.model}`)
        console.log(`Виробник - ${this.manufacturer}`)
        console.log(`Рік - ${this.year}`)
        console.log(`Максимальна швидкість - ${this.maxspeed}`)
        console.log(`Об'єм двигуна - ${this.fuel}`)
    }

    increaseMaxSpeed (newSpeed){
        this.maxspeed=newSpeed
    }
    changeYear (newValue){
        this.year=newValue
    }
    addDriver (driver){
        this.driver=driver
    }

}

car1= new Car('Pikador','Cheval',2008,160,80)
car1.addDriver('Mikola')
console.log(car1)
car1.changeYear(1999)
car1.increaseMaxSpeed(800)
car1.drive()
car1.info()
console.log(car1)

Array.prototype.forEach1= function (FN){
    const myArr=this;
    for (const Key in myArr) {
        FN(myArr[Key])
    }
}

let arr=[1,2,3]
arr.forEach1((a)=>{
    console.log(a)
})

Array.prototype.filter1= function (FN){
    const arr= []
    for (const item of this) {
        if (FN(item)){
            arr.push(item)
        }
    }
    return arr
}

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter1((word) => word.length > 6);

console.log(result);
