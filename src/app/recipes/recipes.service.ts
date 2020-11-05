import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes = [{
    id:'r1',
    title:'sandwich',
    imageurl:'https://noseychef.com/wp-content/uploads/2019/11/IMG_5187.jpg',
    ingredients:['bread','sauce','veggies']
    },
    {
      id:'r2',
      title:'icecream',
      imageurl:'https://upload.wikimedia.org/wikipedia/commons/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg',
      ingredients:['cream','milk','vanilla']
      },
      {
        id:'r3',
        title:'burger',
        imageurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/800px-RedDot_Burger.jpg',
        ingredients:['vegetable','mayyoonise','carrot']
        }
  ]

  getAllRecipes(){
    return[...this.recipes]
  }

  getRecipe(id:string){
    return{...this.recipes.find(recipe=>{
      return recipe.id===id
    })}
  }

  deleteRecipe(id:string){
    this.recipes = this.recipes.filter( recipe =>{
      return recipe.id!==id
    })
  }


  constructor() { }
}
