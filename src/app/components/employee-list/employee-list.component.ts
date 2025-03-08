import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent implements OnInit {
  searchId: number | undefined; // Property to hold the search ID
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {}

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.loadEmployees(); // Refresh the employee list after deletion
    });
  }

  ngOnInit() {
    this.loadEmployees();
  }

  findEmployeeById() {
    if (this.searchId) {
      // Navigate to the employee detail page with the provided ID
      this.router.navigate(['/employees', this.searchId]);
    }
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }
}
