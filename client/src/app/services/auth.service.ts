import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  base_url = environment.base_url + '/users';

  constructor(private http: HttpClient, private store: StoreService) { }

  createUser(username: string, email: string, password: string): Observable<Promise<User>> {
    return this.http.post(this.base_url + '/create', { username, email, password })
      .pipe(
        map((res: Response) => res.json())
      );
  }

  login(user: { username: string, password: string }): Observable<Promise<User>> {
    return this.http.post(this.base_url + 'login', user)
      .pipe(
        map((res: Response) => res.json())
      );
  }

  private generateHeaders() {
    return { };
  }

}
