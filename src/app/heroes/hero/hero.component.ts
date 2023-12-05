import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;


  /*cuando se usa la palabra reservada get, el metodo capitalizeName parece como si fuera una propiedad, es decir
  al invocarlo no es necesario usar () para llamarlo*/
  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name= 'Spiderman'
  }

  changeAge(): void {
    this.age= 25;
  }

  reset(): void {
    this.name='ironman';
    this.age=45;

  }

}
