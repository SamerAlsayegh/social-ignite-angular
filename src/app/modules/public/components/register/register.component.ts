import {FormControl, FormGroup, Validators} from '@angular/forms';
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
  private signupForm: {
    valid: boolean,
    value: {
      email: string,
    }
  };

  constructor(private requestService: RequestService, private userService: UserService, private alert: AlertService, private router: Router) {
    this.env = environment;
    this.signingUp = false;
  }

  async ngOnInit() {
    this.signupForm = new FormGroup({
      'email': new FormControl(this.user.name, [Validators.required, Validators.minLength(4), Validators.email]),
      'password': new FormControl(this.user.password, [Validators.required, Validators.minLength(4)]),
      'toc': new FormControl(this.user.toc, [Validators.requiredTrue,]),
      'mailing_list': new FormControl(this.user.mailing_list, []),
      'mode': new FormControl(this.user.mode, []),
    });
  }

  async onSubmit() {
    const self = this;
    self.signingUp = true;
    console.log(this.signupForm);
    if (this.signupForm.valid) {
      try {
        let registered = await this.userService.register(this.signupForm.value);
        // Successful
        if (registered) {
          await this.alert.success('Registered, please check your email.');
          this.router.navigate(['/register/verify', {email: this.signupForm.value.email}]);
          // Route to new page
        } else {
          await this.alert.error('Failed to register');
        }
        self.signingUp = false;
      } catch (e) {
        console.log(e);
        await this.alert.error('Failed to register');

        self.signingUp = false;
      }
    } else {
      self.signingUp = false;
      await this.alert.error('Check form errors.');

    }
  }

  registerFacebook() {
    this.signingUp = true;
  }


  cancel() {

  }
}
