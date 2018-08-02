import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  constructor(private http: HttpClient, private storeService: StoreService) { }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.base_url + '/create', user)
      .pipe(
        map(this.setUser)
      );
  }

  setUser(user: User): User {
    console.log('Set user', user);
    // this.storeService.setToken(user.jwt);
    this.storeService.user = user;
    return user;
  }

  getAuthUser(): Observable<User> {
    const token = this.storeService.getToken();
    if (token) {
      console.log('User is authenticated');
      this.storeService.setHeader('Authentication', `Bearer ${token}`);
    } else {
      console.log('User is not authenticated');
    }
    return this.http.get<User>(this.base_url + '/me', { headers: this.storeService.headers })
      .pipe(
        map(this.setUser)
      );
  }

  logOut(): Promise<void> {
    this.storeService.user = null;
    return Promise.resolve(this.storeService.destroyToken());
  }

  login(user: { username: string, password: string }): Observable<User> {
    return this.http.post<User>(this.base_url + '/login', user)
      .pipe(
        map(this.setUser)
      );
  }

}
