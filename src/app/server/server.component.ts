import { Component } from '@angular/core';

@Component({
  moduleId : module.id,
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  // tslint:disable-next-line:no-inferrable-types
  serverId: number = 10;
  // tslint:disable-next-line:no-inferrable-types
  serverStatus: string = 'Offline';
  // tslint:disable-next-line:no-inferrable-types
  allowNewServer: boolean = false;

  // tslint:disable-next-line:no-inferrable-types
  server: string;

  serverName: string;

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
      this.server = 'No Server';
    }
    , 2000);
  }

  getServerStatus() { return this.serverStatus; };

  onCreateServer() { this.server = 'Server Created'; };
  onChangeServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  };
}
