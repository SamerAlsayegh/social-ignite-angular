import {RequestService} from '../../../../../services/shared/Request/request.service';

import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../../services/shared/User/user.service';
import {AlertService} from "../../../../../services/shared/Alert/alert.service";
import {Router} from "@angular/router";

declare var require: any;

@Component({
  template: require('./shop.component.html'),
})


export class ShopComponent implements OnInit {

  constructor(private requestService: RequestService, private userService: UserService, private alert: AlertService, private router: Router) {
  }


  async ngOnInit() {

  }

}
