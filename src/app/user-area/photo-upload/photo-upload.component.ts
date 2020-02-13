import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent implements OnInit {

  myVar;
  constructor() { }

  ngOnInit() {

  }

  teste() {
    console.log(this.myVar);
    console.log(this.myVar[0].preview.length)
  }
}