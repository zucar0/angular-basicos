import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>
        <h3>La base es: <strong>{{ base }}</strong> </h3>
        <button (click)="acumular(base)" >+5</button>
        <span>{{ numero }}</span>
        <!-- <button (click)="acumular(-base)">-5</button> -->
        <button (click)="acumular(base * -1)">-5</button>
    `
})
export class ContadorComponent{
    public titulo: string = 'Contador App';
    public numero: number = 10;
    public base: number = 5;
    
    acumular( valor: number){
      this.numero += valor;
    }
}