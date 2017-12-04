import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreationStatus = "None created.";
    serverName = '';
    serverCreated = false;
    servers = [];

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000)
    }

    ngOnInit() {
    }

    onCreateServer() {
        this.serverCreated = true;
        this.serverCreationStatus = "Server [" + this.serverName + "] was created.";
        this.servers.push(this.serverName);
    }

    onUpdateServerName(event:Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}
