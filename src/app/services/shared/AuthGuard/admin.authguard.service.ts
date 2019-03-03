import {Injectable} from '@angular/core';
import {UserService} from "../User/user.service";
import {CanActivate, Router} from "@angular/router";

// noinspection JSAnnotator
@Injectable()


export class AuthGuardAdminService implements CanActivate {

  constructor(public userService: UserService, public router: Router) {
  }


  async canActivate(): Promise<boolean> {
    let user = await this.userService.getUser(true);
    return user.scope == "admin";
  }

}
