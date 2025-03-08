import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ImportEmployeesComponent } from './components/import-employees/import-employees.component';
import { FindByIdComponent } from './components/find-by-id/find-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    AddEmployeeComponent,
    ImportEmployeesComponent,
    FindByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
