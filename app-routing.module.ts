import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { PositionsComponent } from './positions/positions.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmployeeComponent } from './employee/employee.component';
import { PositionComponent } from './position/position.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'employees', component:EmployeesComponent},
  {path: 'positions', component:PositionsComponent},
  {path: 'employee/:_id', component: EmployeeComponent},
  {path: 'position/:_id', component:PositionComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: "**", component:NotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.
    forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
