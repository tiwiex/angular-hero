import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messenger = "Iris";
  messengerNum = 10;

  getMessenger(messengerNum){
    return this.messengerNum * 3;
  }

  constructor() { }

  ngOnInit() {
  }

}
