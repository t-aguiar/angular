import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "None created.";
  serverName = 'testserver';

  serverList = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
	}

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server ["+this.serverName+"] was created.";
    this.serverList.push(this.serverName);
  }

  onUpdateServerName(event) {
    this.serverName = event.target.value;
  }
}
