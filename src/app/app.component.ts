import { Component } from '@angular/core';
import { EmployeeService } from './services/employee.service'; // Import EmployeeService
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Management';
  searchId: number | undefined; // Property to hold the search ID

  constructor(private employeeService: EmployeeService, private router: Router) {} // Inject EmployeeService and Router

  findEmployeeById() {
    if (this.searchId) {
      // Navigate to the employee detail page with the provided ID
      this.router.navigate(['/employees', this.searchId]);
    }
  }
}
