import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

    @Input('listaPersonajes') /*con este decorador indicamos que este componente puede recibir
    de su componente padre la siguiente variable, respetando su tipo de datos. Al
    ponerle 'listaPersonajes' como parametro a Input(), le estamos indicando que
    con ese nombre se hará referencia a esa variable
    */
    public characterList : Character []=[{
      name:'Pikoro',
      power: 500
    }]


    @Output()
    public onDeletedId: EventEmitter<string>=new EventEmitter();



    onDeleteCharacter(id?:string): void{
      /*emitir el id del personaje
      siempre y cuando el id no esté vacío*/
      if (!id ) return;
      this.onDeletedId.emit(id);
    }

 }
