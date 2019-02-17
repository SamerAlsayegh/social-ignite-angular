import {NgForm} from '@angular/forms';
import {RequestService} from '../../../../services/Request/request.service';
import {environment} from '../../../../environments/environment';

import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../services/User/user.service';

declare var require: any;

@Component({
  selector: 'socialignite-login-component',
  template: require('./login.component.html'),
  providers: [RequestService, UserService]
})


export class LoginComponent implements OnInit {
  private env: any;
  user: any = {};
  private loggingIn: boolean;

  constructor(private requestService: RequestService, private userService: UserService) {
    this.env = environment;
    this.loggingIn = false;
  }

  async ngOnInit() {
    this.requestService.get('metadata', {}).then(data => {
      console.log('123', data);
    }).catch(err => {

      console.log('12', err);
    });
  }

  async onSubmit(loginForm: NgForm) {
    const self = this;
    // this.submitted = true;
    console.log(loginForm.value.email);
    this.userService.login(loginForm.value).then(function (loggedIn) {
      // Successful
      if (loggedIn) {
        // Take to new page?
        self.userService.getUser().then((user) => {
          console.log(user);
        }).catch((err) => {
          console.log(err);
        });
      } else {
        // Show error?
      }
      console.log(loggedIn);
    }).catch(function (err) {
      console.log(err);
    });
  }

  loginFacebook() {

  }


  cancel() {

  }
}
