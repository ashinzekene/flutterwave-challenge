import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

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

}
