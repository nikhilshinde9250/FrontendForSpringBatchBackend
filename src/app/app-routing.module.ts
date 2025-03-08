import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ImportEmployeesComponent } from './components/import-employees/import-employees.component';
import { FindByIdComponent } from './components/find-by-id/find-by-id.component'; // Import FindByIdComponent


const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'find-by-id', component: FindByIdComponent },
  { path: 'employees/:id', component: EmployeeDetailComponent },

  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'import', component: ImportEmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
