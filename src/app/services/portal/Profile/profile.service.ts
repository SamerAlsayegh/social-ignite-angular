import {Injectable} from '@angular/core';
import {RequestService} from '../../shared/Request/request.service';
import {Router} from "@angular/router";


@Injectable()


export class ProfileService {
  private user: any;
  private loggedIn: boolean;

  constructor(private Request: RequestService, private router: Router) {

  }

  async login(parameters) {
    try {
      const data = await this.Request.post('auth/login', parameters);
      // this.user = data.body;
      this.loggedIn = true;
      return true;
    } catch (e) {
      // Log Error?
      return false;
    }
  }

  async logout(parameters) {
    return this.Request.post('auth/logout', parameters).then((data) => {
      this.user = null;
      this.loggedIn = false;
    });
  }
}
