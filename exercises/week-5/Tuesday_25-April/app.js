let foods=[
    {title: 'Soup',servings: 2,ingredients: ['cinnamon', 'cumin', 'cocoa']},
    {title: 'Sarma',servings: 3,ingredients: ['rice', 'spices','grape leaves']},
    {title: 'Ice Cream',servings: 4,ingredients: ['milk', 'sahlep']},
]

foods.map((food)=>{
        console.log(`${food.title} \n Serves: ${ food.servings} \n Ingredients:${ food.ingredients.join(',')} `)
})