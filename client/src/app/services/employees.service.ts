import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  base_url = environment.base_url + '/employees';

  constructor(private http: HttpClient) { }

  createEmployee(employee) {
    return this.http.post(this.base_url + '/create', employee)
      .pipe(
        map((res: Response) => res.json()),
      );
  }

  editEmployee(employee) {
    return this.http.post(this.base_url + '/edit', employee)
      .pipe(
        map((res: Response) => res.json()),
      );
  }

  removeEmployee(employee) {
    return this.http.post(this.base_url + '/remove', employee)
      .pipe(
        map((res: Response) => res.json()),
      );
  }

}
