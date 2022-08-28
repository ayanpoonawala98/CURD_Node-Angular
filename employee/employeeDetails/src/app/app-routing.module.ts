import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { EmployeeManagerComponent } from './components/employee-manager/employee-manager.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo:'/' , pathMatch: 'full'},
  {
    path : 'employee' , component : EmployeeManagerComponent
  },
  {
    path: 'employee/add', component: AddEmployeeComponent
  },
  {
    path: 'employee/:id', component: EmployeeManagerComponent
  },
  {
    path: 'employee/edit/:id', component: EditEmployeeComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
