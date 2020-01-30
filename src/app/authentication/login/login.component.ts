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

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {

  }

  login( ){
    
  }

  googleLogin( ) {
    let that = this;
    //uses googl provider - easy with firebase
    const userCredential = this.authService.googleLogin( );
    userCredential.subscribe({
      next(userData){
        console.log(userData)
        that.registeredUser = that.authService.getCurrentUser();
        that.loggedUser = true;
        that.verifiedUser = that.registeredUser.emailVerified;
        },
      error(err) {
        console.log(err);
        that.loggedUser = false;
        }
    });
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