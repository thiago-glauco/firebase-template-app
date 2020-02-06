import { Component, OnInit } from '@angular/core';
import { BoggusUserService } from '../../services/boggus-user-service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

const dataSet = [
  {email: 'test0@teste.com', verified: false},
  {email: 'test1@teste.com', verified: true},
  {email: 'test2@teste.com', verified: true},
  {email: 'test3@teste.com', verified: true}
]
export class UserProfileComponent implements OnInit {
  userData = {};

  constructor(private userService: BoggusUserService) { }

  ngOnInit() {
    console.log("here");
    this.userService.setUser(dataSet[0])
    this.userData = this.userService.getUser().getValue();
    console.log(userData);
  }


}