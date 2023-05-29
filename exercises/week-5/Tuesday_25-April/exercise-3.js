const favouriteRecipe = [
    {
        title: "Soup",
        servings: 3,
        ingredients:["lenses","onion","potato","tomato paste"] 
    },
    {
        title: "Sarma",
        servings: 2,
        ingredients: ["grape leaves", "rice", "spices"]
    },
    {
        title: "Börek",
        servings: 2,
        ingredients: ["Phyllo", "potato", "black pepper"]
    }
];



//for (let index = 0; index < favouriteRecipe.length; index++) {}

    //  console.log(`Title: ${favouriteRecipe.map((item)=> item.title)}`);
    //  console.log(`Serves : ${favouriteRecipe.map((item)=> item.servings)}`);
    //  console.log(`Ingredients : ${favouriteRecipe.map((item)=> item.ingredients)}`);

    favouriteRecipe.map((food)=>{
        console.log(`${food.title} \n Serves: ${ food.servings} \n Ingredients:${ food .ingredients.join(',')} `)
})