import {Injectable} from '@angular/core';
import {UserService} from "../User/user.service";
import {CanActivate, Router} from "@angular/router";

// noinspection JSAnnotator
@Injectable()


export class AuthGuardPublicService implements CanActivate {

  constructor(public userService: UserService, public router: Router) {
  }


  async canActivate(): Promise<boolean> {
    let self = this;
    let user = await this.userService.getUser(true);

    if (user) {
      // Logged in, so can activate
      self.router.navigate(['dashboard']);// Logged in, so can't use login routes...
      return false;
    } else {
      // this.router.navigate(['dashboard']);//
      return true;
    }
  }

}
