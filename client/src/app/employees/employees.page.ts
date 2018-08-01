import { Component } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeesService } from '../services/employees.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-employees',
  templateUrl: 'employees.page.html',
  styleUrls: ['employees.page.scss']
})
export class EmployeesPage {
  employees: Employee[];
  constructor(
    private employeesService: EmployeesService,
    private authService: AuthService,
  ) { }

  getUsers() {
    const id = this.authService.user.id;
    this.employeesService.getAllEmployees(id)
      .subscribe(console.log);
  }
}
