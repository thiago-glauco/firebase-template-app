import { Component, OnInit } from '@angular/core';
import { BoggusUserService } from '../../services/boggus-user.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})


export class UserProfileComponent implements OnInit {
  userData = {email: "blablabla"};
  userDataObservable: Observable<any>;
  dataSet = [
    {email: 'test0@teste.com', verified: false},
    {email: 'test1@teste.com', verified: true},
    {email: 'test2@teste.com', verified: true},
    {email: 'test3@teste.com', verified: true}
  ];
  constructor(private userService: BoggusUserService) { }

  ngOnInit() {
    console.log("here");
    this.userService.setUser(this.dataSet[0]);
    this.userDataObservable = this.userService.getUser();
    this.userDataObservable.subscribe({
      next(data) {
        this.userData = data;
        console.log("email: " + this.userData.email);}
    });
  }

  ngOnDestroy() {
    this.userDataObservable.forEach;
  }


}