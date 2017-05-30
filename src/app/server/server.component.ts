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

  constructor() {
    setTimeout( () => this.allowNewServer = true
    , 2000);
  }

  getServerStatus() { return this.serverStatus; };
}
