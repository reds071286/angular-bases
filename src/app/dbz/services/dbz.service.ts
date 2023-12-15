import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";

@Injectable({
  providedIn: 'root'})
export class DbzService {

  public characters: Character [] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Trunks',
    power: 10
  },{
    id: uuid(),
    name:'Vegueta',
    power:700
  }
]

addNewCharacter(character: Character): void {

  /* ...character se le dice operador spread, se utiliza en este caso para esparcir o tener
  acceso a todas las propiedades del objeto recibido*/

  const newCharacter: Character = { id: uuid(), ...character};
  this.characters.push(newCharacter);
}

/*onDeletedId(index: number): void {
  this.characters.splice(index,1);
}*/

deleteCharacterById(id:string){
  this.characters=this.characters.filter(character => character.id != id)
}



}
