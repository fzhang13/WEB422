import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './components/home/home.component';
import {EmployeesComponent} from './components/employees/employees.component';
import {PositionsComponent} from './components/positions/positions.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component'

const routes: Routes = [
 {path: 'home', component: HomeComponent},
 {path: 'employees', component: EmployeesComponent},
 {path: 'positions', component: PositionsComponent},
 {path: '', redirectTo: '/home', pathMatch: 'full'},
 {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
