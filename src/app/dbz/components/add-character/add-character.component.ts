import { Component, EventEmitter, Output  } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'add-dbz-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {


  /*con estas lineas estamos mandando la propiedad onNewCharacter para que
  se pueda mandar al componente Padre, tiene que ser de tipo EventEmmitter y
  lleva el decorador @Output() */
  @Output()
  public onNewCharacter: EventEmitter<Character>=new EventEmitter()


  public character : Character = {
    name: '',
    power: 0
  }


  public emitCharacter(): void {

    //debugger; //para añadir un breakpoing

    console.log(this.character);


    if(this.character.name.length===0) return;
      this.onNewCharacter.emit(this.character);
      this.character={name:'', power: 0};
  }

}
