import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';

  borrarElemento(){
    console.log('borrando')
    const heroeBorrado = this.heroes.shift();
    console.log(heroeBorrado);
  }
  borrarElementos(){
    this.heroes = [];
  }

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || ''; 
  }
}
