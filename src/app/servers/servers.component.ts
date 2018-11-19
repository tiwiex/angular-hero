import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server Was Created";
  serverName ='';
  serverStatus = 'offline';

  constructor() {
    setTimeout(() => {
    this.allowNewServer = true;
    
    }, 2000); 

    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';


  }

  ngOnInit() {
  
  }
  onCreateServer(){
    this.serverCreationStatus = "Server was created";
  }

  onUpdateServerName(event: any){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;

  }
  onClearField(){
    this.serverName = '';
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }


}
