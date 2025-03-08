import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-by-id',
  templateUrl: './find-by-id.component.html',
})
export class FindByIdComponent {
  searchId: number | undefined; // Property to hold the search ID

  constructor(private router: Router) {}

  findEmployeeById() {
    if (this.searchId) {
      // Navigate to the employee detail page with the provided ID
      this.router.navigate(['/employees', this.searchId]);
    }
  }
}
