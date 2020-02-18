import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Routes, RouterModule} from '@angular/route';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {

  }

  back(){
    this.location.back()
  }


}