import {NgForm} from '@angular/forms';
import {RequestService} from '../../../../services/Request/request.service';
import {environment} from '../../../../environments/environment';

import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../services/User/user.service';
import {AlertService} from "../../../../services/Alert/alert.service";
import {Router} from "@angular/router";

declare var require: any;

@Component({
  selector: 'socialignite-login-component',
  template: require('./profile.component.html'),
})


export class ProfileComponent implements OnInit {

  constructor(private requestService: RequestService, private userService: UserService, private alert: AlertService, private router: Router) {

  }

  async ngOnInit() {

  }
}
