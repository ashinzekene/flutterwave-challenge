import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeesService } from '../services/employees.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-employees',
  templateUrl: 'employees.page.html',
  styleUrls: ['employees.page.scss']
})
export class EmployeesPage implements OnInit {
  employees: Employee[];
  constructor(
    private employeesService: EmployeesService,
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.employeesService.getAllEmployees()
      .subscribe(employees => {
        this.employees = employees;
      });
  }
}
