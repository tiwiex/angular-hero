import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resetuser',
  templateUrl: './resetuser.component.html',
  styleUrls: ['./resetuser.component.css']
})
export class ResetuserComponent implements OnInit {
  userName = '';

  constructor() { }

  ngOnInit() {
  }
  onClearField(){
    this.userName = '';
  }

}
