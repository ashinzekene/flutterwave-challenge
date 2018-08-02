import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeesService } from '../services/employees.service';
import { AuthService } from '../services/auth.service';

// account_no:"7482911940"
// bank_name:"Zenith"
// createdAt:"2018-08-02T13:18:20.713Z"
// email:"heyo@gmail.com"
// employer:"5b6293e944f7f612533b9b4b"
// name:"Heyo"
// pay:70000
// updatedAt:"2018-08-02T13:18:20.713Z"
// _id:"5b63049c30a4f7124a1bcdb5"

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

  generateRaveOptions(emp: Employee) {
    const raveObj = {
      custom_title: 'Employee Payment',
      customer_firstname: emp.name,
      customer_email: emp.email,
      customer_phone: emp.phone_no,
      amount: emp.pay,
      PBFPubKey: 'FLWPUBK-f836a1f887a847ea500cbffcfee9ce45-X',
      txref: `STAFF-MGT-${(Math.random() * 1000000).toFixed(0)}`,
    };
    return raveObj;
  }

}
