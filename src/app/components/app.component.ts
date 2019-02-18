import {UserService} from "../services/User/user.service";

declare var require: any

import { Component, OnInit } from '@angular/core';
import {AlertService} from "../services/Alert/alert.service";
import {RequestService} from "../services/Request/request.service";

@Component({
    selector: 'app-root',
    template: require('./app.component.html'),
  providers: [RequestService, UserService, AlertService]
  // styleUrls: ['./home.component.css']
})
export class AppComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
