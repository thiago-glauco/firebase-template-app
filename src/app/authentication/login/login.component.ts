import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {User} from '../../shared/user';
import {RegisteredUser} from '../../shared/registered-user';
import {Observable, from} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hidePassword: boolean = true; //just for the user interface
  loggedUser: boolean = false; //toogle loggout and register buttons
  verifiedUser: boolean; //toogle loggout and register buttons
  passwordsEqual: boolean = true;

  loginUser: RegisteredUser = new RegisteredUser(); //object with user form data
  registeredUser: firebase.User; //User with data returned from firebase auth service

  loginObject = {
    next(userData){
        console.log(userData)
        this.registeredUser = this.authService.getCurrentUser();
        this.loggedUser = true;
        this.verifiedUser = this.registeredUser.emailVerified;
    },
    error(err) {
      console.log(err);
      this.loggedUser = false;
    }
  }

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {

  }

  login(){
    console.log(this.loginUser.email)
    this.authService.emailSignIn(this.loginUser.email, this.loginUser.password).subscribe(this.loginObject)
  }

  googleLogin( ) {
    let that = this;
    //uses googl provider - easy with firebase
    const userCredential = this.authService.googleLogin( );
    userCredential.subscribe(this.loginObject);
  }

  logout( ) {
    let that = this;
    const logoutStatus = from(this.authService.logOut());
    logoutStatus.subscribe({
      next( data ) {
        console.log(data);
        that.loggedUser = false;
      },
      error(err) {
        console.log(err);
        if( that.authService.hasLoggedUser ) {
          that.loggedUser = true;
        }
      }
    });
  }
}