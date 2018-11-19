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
  serverCreated = false;
  servers = ['Test Server 1', 'Test Server 2'];

  constructor() {
    setTimeout(() => {
    this.allowNewServer = true;
    
    }, 2000); 

    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';


  }

  ngOnInit() {
  
  }
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is" + this.serverName;
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
