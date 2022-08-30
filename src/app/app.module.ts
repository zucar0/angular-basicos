import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// import { ContadorComponent } from './contador/contador.component';
//Tarea
//Crear un módulo llamado ContadorModule: con declaraciones y exportaciones
import { ContadorModule } from './contador/contador.module';

import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent
    // ContadorComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
