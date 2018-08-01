import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  username: string;
  email: string;
  password: string;

  constructor(private authService: AuthService) { }

  createAccount() {
    console.log(this.username, this.email, this.password);
  }

  ngOnInit() {
  }

}
