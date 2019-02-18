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
  template: require('./login.component.html'),
})


export class LoginComponent implements OnInit {
  private env: any;
  user: any = {};
  private loggingIn: boolean = false;

  constructor(private requestService: RequestService, private userService: UserService, private alert: AlertService, private router: Router) {
    this.env = environment;
    this.loggingIn = false;
  }

  async ngOnInit() {

  }

  async onSubmit(loginForm: NgForm) {
    const self = this;
    self.loggingIn = true;
    let loggedIn = await this.userService.login(loginForm.value);
    // Successful
    if (loggedIn) {
      await this.alert.success('Logged in!');
      this.router.navigate(['/']);
      await self.userService.getUser();
      // Route to new page
    } else {
      await this.alert.error('Invalid password/username combination', 'Failed to login');
    }
    self.loggingIn = false;
    console.log(loggedIn);
  }

  loginFacebook() {
    this.loggingIn = true;
  }


  cancel() {

  }
}
