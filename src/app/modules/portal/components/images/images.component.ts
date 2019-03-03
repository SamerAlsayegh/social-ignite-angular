import {NgForm} from '@angular/forms';
import {RequestService} from '../../../../services/shared/Request/request.service';
import {environment} from '../../../../environments/environment';

import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../services/shared/User/user.service';
import {AlertService} from "../../../../services/shared/Alert/alert.service";
import {Router} from "@angular/router";

declare var require: any;

@Component({
  selector: 'socialignite-images-component',
  template: require('./images.component.html'),
})


export class ImagesComponent implements OnInit {

  constructor(private requestService: RequestService, private userService: UserService, private alert: AlertService, private router: Router) {
  }
  cards = [
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',

  ];
  async ngOnInit() {

  }

}
