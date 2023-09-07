import { Component } from '@angular/core';
import { Recipe, RECIPES } from '../recipe';

@Component({
  selector: 'buttons',
  templateUrl: './buttons.html',
  styleUrls: ['./buttons.css']
})
export class ButtonsComponent {
  mysHeroes: Recipe[] = RECIPES;
  myNewHeroe:Recipe={id:-1,name:"Nombre Receta",origin:"Oriden del plato",information:"Información adicional"}
  selectedHeroe: Recipe|null=null;

  
newHeroe2(){
  this.myNewHeroe.id = this.mysHeroes.length + 1;
  this.mysHeroes.push(this.myNewHeroe);
  this.myNewHeroe={id:-1,name:"Nombre Receta",origin:"Oriden del plator",information:"Información adicional"}

}

  mouseMoveHandler(event: MouseEvent): void {
    // Esta función se ejecutará cuando el mouse se mueva sobre el botón.
    // Puedes realizar acciones adicionales aquí.
  
    // Por ejemplo, puedes cambiar el estilo del botón al mover el mouse sobre él.
    const button = event.target as HTMLButtonElement;
    button.style.backgroundColor = 'yellow';
  }
  deleteHeroe(hero: Recipe): void {
    const index = this.mysHeroes.indexOf(hero);
    if (index !== -1) {
      this.mysHeroes.splice(index, 1);
    }
  }

  mouseDownHandler(event: MouseEvent): void {
    // Cambia el color de fondo del botón cuando se presiona el botón del mouse.
    const button = event.target as HTMLButtonElement;
    button.style.backgroundColor = 'red';
  }

  selectHeroe(heroe:Recipe){
    this.selectedHeroe = heroe;
  }
 
  
  updateHeroe(myHeroe: Recipe, newNameHeroe:string){
    myHeroe.name = newNameHeroe;
  }

}
