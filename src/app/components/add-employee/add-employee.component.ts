import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
})
export class AddEmployeeComponent {
  employee: Employee = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    contact: '',
    country: '',
    dob: ''
  };

  constructor(private employeeService: EmployeeService) {}

  addEmployee() {
    this.employeeService.addEmployee(this.employee).subscribe(() => {
      alert('Employee added successfully!');
      this.resetForm();
    });
  }

  resetForm() {
    this.employee = { id: 0, firstName: '', lastName: '', email: '', gender: '', contact: '', country: '', dob: '' };
  }
}