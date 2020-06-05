import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlphabetComponent } from './alphabet/alphabet.component';
import { HomeComponent } from './home/home.component';
import { TablesComponent } from './tables/tables.component';
import { PoemsComponent } from './poems/poems.component';
import { CalcComponent } from './calc/calc.component';
import { ColorComponent } from './color/color.component';

@NgModule({
  declarations: [
    AppComponent,
    AlphabetComponent,
    HomeComponent,
    TablesComponent,
    PoemsComponent,
    CalcComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
