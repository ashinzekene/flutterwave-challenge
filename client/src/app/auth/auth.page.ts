import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  username: string;
  email: string;
  password: string;

  signUp = true;
  logIn = false;
  changeText = 'Log In Instead';

  successText = 'Log In successful';
  success = false;

  constructor(private authService: AuthService, private router: Router) { }

  createAccount() {
    console.log(this.username, this.email, this.password);
    const { username, email, password } = this;
    this.authService.createUser({ username, email, password })
      .subscribe(this.handleSuccess);
  }

  authenticate() {
    if (this.signUp) {
      this.createAccount();
    } else {
      this.logInUser();
    }
  }

  logInUser() {
    console.log(this.username, this.email, this.password);
    const { username, email, password } = this;
    this.authService.login({ username, password })
      .subscribe(this.handleSuccess);
  }

  handleSuccess() {
    this.success = true;
    setTimeout(() => {
      this.router.navigateByUrl('/');
    }, 1000);
  }

  changeAuthType() {
    if (this.logIn) {
      this.signUp = true;
      this.logIn = false;
      this.changeText = 'Log In Instead';
      this.successText = 'Log In successful';
    } else {
      this.signUp = false;
      this.logIn = true;
      this.changeText = 'Sign Up Instead';
      this.successText = 'Sign Up successful';
    }
  }

  ngOnInit() {
  }

}
