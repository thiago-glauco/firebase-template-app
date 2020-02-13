import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import {DatabaseUser} from '../shared/database-user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})


export class UserProfileComponent implements OnInit {

  //userData just contains data extracted from observables
  userData: DatabaseUser = {};
  userDataObservable: Observable<DatabaseUser>;
  fbUser: firebase.User;

  constructor(private userService: UserService,
    private authService: AuthenticationService,
  ) {
    //gets authservice user data, and uses this data to recover the profile from the database
    this.fbUser = this.authService.getCurrentUser( );
    this.userDataObservable = this.userService.getDatabaseUser();
  }

  ngOnInit() {
    //checks if user exist in database and load its data
    let that = this;
    this.userService.userExist(this.fbUser.uid);
    this.userDataObservable.subscribe({
      next(user){
        that.userData = user
        console.log( that.userData )
        },
      error(err){ alert(err) }
    })
  }

  ngOnDestroy() {
    
  }


}