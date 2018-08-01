import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private base_url = environment.base_url + '/users';
  user: User;

  constructor(private http: HttpClient, private store: StoreService) { }

  createUser(username: string, email: string, password: string): Observable<Promise<User>> {
    return this.http.post(this.base_url + '/create', { username, email, password })
      .pipe(
        map((res: Response) => res.json()),
        map(this.setUser)
      );
  }

  setUser(user: User) {
    console.log('Set user', user);
    this.store.setToken(user.jwt);
    this.user = user;
  }

  login(user: { username: string, password: string }): Observable<Promise<User>> {
    return this.http.post(this.base_url + 'login', user)
      .pipe(
        map((res: Response) => res.json()),
        map(this.setUser)
      );
  }

  private generateHeaders() {
    return { };
  }

}
