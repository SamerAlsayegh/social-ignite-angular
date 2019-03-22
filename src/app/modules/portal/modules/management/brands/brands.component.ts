import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../../services/shared/User/user.service';
import {AlertService} from "../../../../../services/shared/Alert/alert.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PageService} from "../../../../../services/portal/Page/page.service";

declare var require: any;

@Component({
  selector: 'socialignite-brands-component',
  template: require('./brands.component.html'),
  styleUrls: ['./brands.component.scss']
})


export class BrandsComponent implements OnInit {

  constructor(private pageService: PageService, private userService: UserService, private alert: AlertService, private router: Router, private route: ActivatedRoute ) {
  }
  async ngOnInit() {

  }
}
