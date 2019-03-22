
import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RequestService} from "../../../../../services/shared/Request/request.service";
import {UserService} from "../../../../../services/shared/User/user.service";
import {AlertService} from "../../../../../services/shared/Alert/alert.service";

declare var require: any;

@Component({
  selector: 'socialignite-image-card',
  template: require('./image.component.html'),
})


export class ImageComponent implements OnInit {
  image = {
    url: "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg",
    // progress: 0,
    used: true,
    favourite: false
  };
  // @Input() image: object;
  // @Input('master') masterName: string;

  constructor(private requestService: RequestService, private userService: UserService, private alert: AlertService, private router: Router) {

  }

  async ngOnInit() {

  }

}
