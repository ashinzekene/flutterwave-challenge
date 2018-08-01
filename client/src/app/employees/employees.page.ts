import { Component } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: 'employees.page.html',
  styleUrls: ['employees.page.scss']
})
export class EmployeesPage {
  employees: Employee[];
  constructor(private employeesService: EmployeesService) {}

  getUsers() {
    this.employeesService.
  }
}
