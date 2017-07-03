import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: '<app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  serverId: number = 10;
  serverStatus: string;
  allowNewServer: boolean = false;
  serverCreated: boolean = false;
  serverName: string = 'Initial Name';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    setTimeout( () => this.allowNewServer = true, 2000 );
  }

  getServerStatus() { return this.serverStatus; };

  onCreateServer() { this.serverCreated = true; };

  onChangeServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  };

  getColor(){

  }

}
