let sessionsList=JSON.parse(localStorage.getItem('date'))
for (const session of sessionsList) {
    let div = document.createElement('div')
    div.innerText=sessionsList.toString()
    document.body.appendChild(div)
}
