let sessionsList;
if (localStorage.getItem('date')){
    sessionsList = JSON.parse(localStorage.getItem('date'))
}else {
    sessionsList=[];
}
let date= new Date();
sessionsList.push(date)
localStorage.setItem('date',JSON.stringify(sessionsList))