fetch('https://dummyjson.com/recipes')
    .then((res)=> res.json())
    .then((x)=> {
        for (let i = 0; i < x.recipes.length; i++) {
            let div=document.createElement('div')
            let id=document.createElement('p')
            let name=document.createElement('p')
            let ingridients=document.createElement('ul')
            let instructions=document.createElement('ul')
            let prepTimeMinutes= document.createElement('p')
            let cookTimeMinutes=document.createElement('p')
            let servings=document.createElement('p')
            let difficulty=document.createElement('p')
            let cuisine=document.createElement('p')
            let caloriesPerServing=document.createElement('p')
            let tags=document.createElement('p')
            let userId = document.createElement('p')
            let image=document.createElement('img')
            let rating=document.createElement('p')
            let reviewCount=document.createElement('p')
            let mealType=document.createElement('p')

            id.innerText=x.recipes[i].id
            name.innerText=x.recipes[i].name
            prepTimeMinutes.innerText=x.recipes[i].prepTimeMinutes
            cookTimeMinutes.innerText=x.recipes[i].cookTimeMinutes
            servings.innerText=x.recipes[i].servings
            difficulty.innerText=x.recipes[i].difficulty
            cuisine.innerText=x.recipes[i].cuisine
            caloriesPerServing.innerText=x.recipes[i].caloriesPerServing
            for (let j = 0; j < x.recipes[i].tags.length; j++) {
                tags.innerText=x.recipes[i].tags
            }
            userId.innerText=x.recipes[i].userId
            image.src=x.recipes[i].image
            rating.innerText=x.recipes[i].rating
            reviewCount.innerText=x.recipes[i].reviewCount
            for (let j = 0; j < x.recipes[i].mealType.length; j++) {
                mealType.innerText=x.recipes[i].mealType[j]
            }

            for (let j = 0; j < x.recipes[i].ingredients.length; j++) {
                let ingridient = document.createElement('li')
                ingridient.innerText=x.recipes[i].ingredients[j]
                ingridients.appendChild(ingridient)
            }
            for (let j = 0; j < x.recipes[i].instructions.length; j++) {
                let phase = document.createElement('li')
                phase.innerText=x.recipes[i].instructions[j]
                instructions.appendChild(phase)
            }

            div.appendChild(id)
            div.appendChild(name)
            div.appendChild(ingridients)
            div.appendChild(instructions)
            div.appendChild(prepTimeMinutes)
            div.appendChild(cookTimeMinutes)
            div.appendChild(servings)
            div.appendChild(difficulty)
            div.appendChild(cuisine)
            div.appendChild(caloriesPerServing)
            div.appendChild(tags)
            div.appendChild(userId)
            div.appendChild(image)
            div.appendChild(rating)
            div.appendChild(reviewCount)
            div.appendChild(mealType)
            document.body.appendChild(div)
        }
    })

let recipes= {
    "recipes": [
        {
            "id": 1,
            "name": "Classic Margherita Pizza",
            "ingredients": [
                "Pizza dough",
                "Tomato sauce",
                "Fresh mozzarella cheese",
                "Fresh basil leaves",
                "Olive oil",
                "Salt and pepper to taste"
            ],
            "instructions": [
                "Preheat the oven to 475°F (245°C).",
                "Roll out the pizza dough and spread tomato sauce evenly.",
                "Top with slices of fresh mozzarella and fresh basil leaves.",
                "Drizzle with olive oil and season with salt and pepper.",
                "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
                "Slice and serve hot."
            ],
            "prepTimeMinutes": 20,
            "cookTimeMinutes": 15,
            "servings": 4,
            "difficulty": "Easy",
            "cuisine": "Italian",
            "caloriesPerServing": 300,
            "tags": [
                "Pizza",
                "Italian"
            ],
            "userId": 166,
            "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
            "rating": 4.6,
            "reviewCount": 98,
            "mealType": [
                "Dinner"
            ]
        }
    ]
}