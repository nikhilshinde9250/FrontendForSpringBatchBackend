import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-import-employees',
  templateUrl: './import-employees.component.html',
})
export class ImportEmployeesComponent {
  constructor(private employeeService: EmployeeService) {}

  importEmployees() {
    this.employeeService.importEmployees().subscribe((message) => {
      alert(message);
    });
  }
}
