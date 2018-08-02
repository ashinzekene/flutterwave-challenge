import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  base_url = environment.base_url + '/employees';

  constructor(private http: HttpClient, private storeService: StoreService) { }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.base_url + '/create', employee, { headers: this.storeService.headers });
  }

  editEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.base_url + '/edit', employee, { headers: this.storeService.headers });
  }

  removeEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.base_url + '/remove', employee, { headers: this.storeService.headers });
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.base_url}/all`, { headers: this.storeService.headers });
  }

}
