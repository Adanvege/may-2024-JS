fetch('https://dummyjson.com/carts')
    .then((res)=> res.json())
    .then((x)=> {
        console.log(x)
    })

fetch('https://dummyjson.com/carts')
    .then((res)=> res.json())
    .then((x)=> {
        for (let i = 0; i < x.carts.length; i++) {
            let div=document.createElement('div')
            div.classList.add('cart')
            let id=document.createElement('p')
            let total=document.createElement('p')
            let discountTotal=document.createElement('p')
            let userId=document.createElement('p')
            let totalProduct=document.createElement('p')
            let totalQuantity=document.createElement('p')
            let divProduct=document.createElement('div')
            divProduct.classList.add('product')
            id.innerText=x.carts[i].id

            for (let j = 0; j < x.carts[i].products.length; j++){
                let idProduct=document.createElement('p')
                let title=document.createElement('p')
                let price=document.createElement('p')
                let quantity=document.createElement('p')
                let total=document.createElement('p')
                let discountPercent=document.createElement('p')
                let discountTotal=document.createElement('p')
                let tumbnail=document.createElement('img')
                idProduct.innerText=x.carts[i].products[j].id
                title.innerText=x.carts[i].products[j].title
                price.innerText=x.carts[i].products[j].price
                quantity.innerText=x.carts[i].products[j].quantity
                total.innerText=x.carts[i].products[j].total
                discountPercent.innerText=x.carts[i].products[j].discountPercentage
                discountTotal.innerText=x.carts[i].products[j].discountedTotal
                tumbnail.src=x.carts[i].products[j].thumbnail
                divProduct.appendChild(idProduct)
                divProduct.appendChild(title)
                divProduct.appendChild(price)
                divProduct.appendChild(quantity)
                divProduct.appendChild(total)
                divProduct.appendChild(discountPercent)
                divProduct.appendChild(discountTotal)
                divProduct.appendChild(tumbnail)
            }

            total.innerText=x.carts[i].total
            discountTotal.innerText=x.carts[i].discountedTotal
            userId.innerText=x.carts[i].userId
            totalProduct.innerText=x.carts[i].totalProducts
            totalQuantity.innerText=x.carts[i].totalQuantity
            div.appendChild(id)
            div.appendChild(divProduct)
            div.appendChild(total)
            div.appendChild(discountTotal)
            div.appendChild(userId)
            div.appendChild(totalProduct)
            div.appendChild(totalQuantity)
            document.body.appendChild(div)
        }
    })
