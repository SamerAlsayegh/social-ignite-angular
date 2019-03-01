import {Injectable} from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {UserService} from "../User/user.service";


@Injectable()


export class AuthGuardPortalService implements CanActivate {

  constructor(public userService: UserService, public router: Router) {}


  async canActivate(): Promise<boolean> {
    let user = await this.userService.getUser(true);
    if (user){
      // Logged in, so can activate
      return true;
    } else {
      // this.router.navigate(['dashboard']);//
      this.router.navigate(['login']);// Logged in, so can't use login routes...
      return false;
    }
  }

}
