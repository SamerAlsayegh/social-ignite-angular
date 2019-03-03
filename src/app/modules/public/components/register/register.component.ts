import {NgForm} from '@angular/forms';
import {RequestService} from '../../../../services/shared/Request/request.service';
import {environment} from '../../../../environments/environment';

import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../services/shared/User/user.service';
import {AlertService} from "../../../../services/shared/Alert/alert.service";
import {Router} from "@angular/router";

declare var require: any;

@Component({
  selector: 'socialignite-register-component',
  template: require('./register.component.html'),
})


export class RegisterComponent implements OnInit {
  private env: any;
  user: any = {
    mailing_list: true
  };
  private signingUp: boolean = false;

  constructor(private requestService: RequestService, private userService: UserService, private alert: AlertService, private router : Router) {
    this.env = environment;
    this.signingUp = false;
  }

  async ngOnInit() {

  }

  async onSubmit(signupForm: NgForm) {
    const self = this;
    self.signingUp = true;
    let registered = await this.userService.register(signupForm.value);
    // Successful
    if (registered) {
      await this.alert.success('Registered, please check your email.');
      this.router.navigate(['/register/verify', { email: signupForm.value.email }]);
      // Route to new page
    } else {
      await this.alert.error('Failed to register');
    }
    self.signingUp = false;
    console.log(registered);
  }

  registerFacebook() {
    this.signingUp = true;
  }


  cancel() {

  }
}
