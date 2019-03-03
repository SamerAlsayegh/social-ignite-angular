import {Injectable} from '@angular/core';
import {RequestService} from '../Request/request.service';
import {Router} from "@angular/router";


@Injectable()


export class UserService {
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

  async logout() {
    return this.Request.post('auth/logout').then((data) => {
      this.user = null;
      this.loggedIn = false;
    });
  }

  async register(parameters) {
    return this.Request.post('auth/register', parameters);
  }

  async checkEmail(parameters) {
    return this.Request.post('auth/valid', parameters);
  }

  // sessionValidate(callback) {
  //     if ($rootScope.loggedIn != null) return callback($rootScope.loggedIn);
  //     else {
  //         return Request.get('user',
  //             message => {
  //                 // $rootScope.user = message.data;
  //                 $rootScope.user = message.data;
  //                 if ($rootScope.drift) {
  //                     drift.identify($rootScope.user.email, {
  //                         _id: $rootScope.user._id,
  //                         scope: $rootScope.user.scope,
  //                         mailing_list: $rootScope.user.mailing_list,
  //                         verified: $rootScope.user.verified
  //                     });
  //                 }
  //                 $rootScope.loggedIn = true;
  //                 return callback(true);
  //             }, (status, message) => callback(false));
  //     }
  // }
  // verify(parameters, cbSuccess, cbFail) {
  //     if (!parameters)
  //         return;
  //     return Request.post('auth/verify_email', parameters,
  //         message => cbSuccess(message), (status, message, messageCode) => cbFail(status, message, messageCode));
  // },
  //
  // requestPasswordReset(email, cbSuccess, cbFail) {
  //     return Request.post('auth/forgotten_password', {
  //         email
  //     }, message => cbSuccess(message), (status, message) => cbFail(status, message));
  // },
  //
  // submitPasswordReset(code, password, cbSuccess, cbFail) {
  //     return Request.post('auth/forgotten_password', {
  //         code,
  //         password
  //     }, message => cbSuccess(message), (status, message) => cbFail(status, message));
  // },
  //
  // requestEmailResend(email, cbSuccess, cbFail) {
  //     return Request.post('auth/request_email', {
  //         email
  //     }, message => cbSuccess(message), (status, message) => cbFail(status, message));
  // },
  //
  async getUser(refresh = false) {
    if (this.user != null && refresh == false) {
      return this.user;
    } else {
      try {
        const data = await this.Request.get('user');
        this.user = data.data;
        this.loggedIn = true;
        return this.user;
      } catch (e) {
        return null;
      }
    }
    // this.user
    // Get from api, or use loaded variable? Allow person to force refresh details
  }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return this.getUser(true).then(loggedInUser=>{
  //     if (!loggedInUser) {
  //       this.router.navigate(['login']);
  //       return false;
  //     }
  //     return true;
  //   }).catch(err => {
  //     return false;
  //   })
  // }
}
