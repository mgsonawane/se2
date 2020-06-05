import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlphabetComponent } from './alphabet/alphabet.component';
import { HomeComponent } from './home/home.component';
import { TablesComponent } from './tables/tables.component';
import { PoemsComponent } from './poems/poems.component';
import {CalcComponent } from './calc/calc.component';
import {ColorComponent } from './color/color.component';
const routes: Routes = [
  { path: 'alpha', component: AlphabetComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'tables', component: TablesComponent },
  { path: 'poem', component: PoemsComponent },
  { path: 'calc', component: CalcComponent },
  { path: 'color', component: ColorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
