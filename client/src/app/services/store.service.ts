import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private _headers: HttpHeaders;
  private _user: User;

  constructor() {}

  getToken(): string {
    return window.localStorage.getItem('token') || '';
  }

  setToken(token): void {
    window.localStorage.setItem('token', token);
  }

  destroyToken(): void {
    window.localStorage.removeItem('token');
  }

  get user(): User {
    return this.user;
  }

  set user(user: User) {
    this.user = user;
  }

  setHeader(name: string, val: string) {
    this._headers.set(name, val);
  }

  get headers() {
    return this._headers;
  }

  removHeader(name) {
    this._headers.delete(name);
  }

}
