import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  base_url = environment.base_url + '/employees';

  constructor(private http: HttpClient) { }

  createEmployee(employee: Employee) {
    return this.http.post(this.base_url + '/create', employee)
      .pipe(
        map((res: Response) => res.json()),
      );
  }

  editEmployee(employee: Employee) {
    return this.http.post(this.base_url + '/edit', employee)
      .pipe(
        map((res: Response) => res.json()),
      );
  }

  removeEmployee(employee: Employee) {
    return this.http.post(this.base_url + '/remove', employee)
      .pipe(
        map((res: Response) => res.json()),
      );
  }

  getAllEmployees(id: string) {
    return this.http.get(`${this.base_url}/all/${id}`)
    .pipe(
      map((res: Response) => res.json()),
    );
  }

}
