import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
//data members
allowNewServer = false;
serverCreationStatus = "No server created"
serverName = "Test Server";
serverCreated = false;
//functions
  constructor() { 
    setTimeout(() =>{this.allowNewServer=true},2000);
  }
  onServerCreation(){
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created. Named as : "+this.serverName;
  }
  onUpdatedServerName(event:Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  ngOnInit() {
  }

}
