import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from'@angular/forms';

import { AppComponent } from './app.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { NovedadComponent } from './novedades/novedad/novedad.component';
import { NovedadListComponent } from './novedades/novedad-list/novedad-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NovedadesComponent,
    NovedadComponent,
    NovedadListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
