import {NgForm} from '@angular/forms';
import {RequestService} from '../../../../services/shared/Request/request.service';
import {environment} from '../../../../environments/environment';

import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../services/shared/User/user.service';
import {AlertService} from "../../../../services/shared/Alert/alert.service";
import {Router} from "@angular/router";

declare var require: any;

@Component({
  selector: 'socialignite-login-component',
  template: require('./members.component.html'),
})


export class MembersComponent implements OnInit {

  constructor(private requestService: RequestService, private userService: UserService, private alert: AlertService, private router: Router) {
  }

  async ngOnInit() {

  }
}
