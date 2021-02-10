import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected = new Subject<Recipe>();
    recipes:Recipe [] = [
        new Recipe(
            'Burger',
            'Cheeseburger with sauce',
            'http://www.pngplay.com/wp-content/uploads/1/Cheeseburger-PNG.png',
            [
                new Ingredient('Bun',1),
                new Ingredient('Meat',2),
                new Ingredient('Fries',20),
            ]),
        new Recipe(
            'Pizza',
            'Pizza with pepperoni',
            'http://www.pngmart.com/files/1/Pepperoni-Pizza.png',
            [
                new Ingredient('Dough',1),
                new Ingredient('Pepperoni',30),
                new Ingredient('Cheese', 30)
            ])
      ];

      constructor(private slService: ShoppingListService){ }

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index:number) {
        return (this.recipes[index]);
    }

      addIngredientsToShoppingList(ingredients:Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}