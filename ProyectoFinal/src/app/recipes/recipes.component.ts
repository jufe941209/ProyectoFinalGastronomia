import { Component } from '@angular/core';
import { RECIPES, Recipe } from '../recipe';
import { FISH,Fish } from '../fish';
 
@Component({
  selector: 'recipes',
  templateUrl: './recipes.html',
  styleUrls: ['./recipes.css']
})
export class RecipesComponent {
  mysRecipes: Recipe[] = RECIPES.slice(0,6);
  mysFishes: Fish[] = FISH;

  myNewRecipe:Recipe={id:-1,name:"Nombre Jugador",origin:"Posicion Jugador",information:"Nombre de su equipo"}

  constructor(){
    this.mysRecipes = this.mysRecipes.slice(0, 6);
  }

newHeroe2(){
  this.myNewRecipe.id = this.mysRecipes.length + 1;
  this.mysRecipes.push(this.myNewRecipe);
  this.myNewRecipe={id:-1,name:"Nombre Jugador",origin:"Posicion Jugador",information:"Nombre de su equipo"}

}

  mouseMoveHandler(event: MouseEvent): void {
    // Esta función se ejecutará cuando el mouse se mueva sobre el botón.
    // Puedes realizar acciones adicionales aquí.
  
    // Por ejemplo, puedes cambiar el estilo del botón al mover el mouse sobre él.
    const button = event.target as HTMLButtonElement;
    button.style.backgroundColor = 'yellow';
  }
}


