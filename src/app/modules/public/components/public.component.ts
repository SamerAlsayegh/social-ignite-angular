import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';


import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/shared/User/user.service";

declare var require: any;

@Component({
    template: require('./public.component.html'),
    styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
    private env: any;

    constructor(private router: Router, private userService: UserService) {
        this.env = environment;
    }

    ngOnInit() {
      // return from(this.userService.getUser(true)).subscribe(function (lol) {
      //   console.log(lol)
      // });
    }

}
