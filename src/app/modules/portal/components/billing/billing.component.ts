import {NgForm} from '@angular/forms';
import {RequestService} from '../../../../services/Request/request.service';
import {environment} from '../../../../environments/environment';

import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../services/User/user.service';
import {AlertService} from "../../../../services/Alert/alert.service";
import {Router} from "@angular/router";

declare var require: any;

@Component({
  selector: 'socialignite-billing-component',
  template: require('./billing.component.html'),
})


export class BillingComponent implements OnInit {
  private env: any;

  constructor(private requestService: RequestService, private userService: UserService, private alert: AlertService, private router: Router) {
    this.env = environment;

  }

  async ngOnInit() {

  }





  cancel() {

  }
}
