import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.page.html',
  styleUrls: ['./create-employee.page.scss'],
})
export class CreateEmployeePage implements OnInit {
  name: string;
  email: string;
  account_no: string;
  bank_name: string;
  pay: string;

  loading = false;
  success = true;
  failure = false;
  constructor(
    private authService: AuthService,
    private employeesService: EmployeesService
  ) { }

  ngOnInit() {}

  save() {
    const { name, bank_name, account_no, pay, email } = this;
    this.loading = true;
    this.employeesService.createEmployee({ name, bank_name, account_no, pay, email })
      .subscribe(res => {
        this.success = true;
        console.log('Result', res);
      });
    this.loading = false;
  }

}
