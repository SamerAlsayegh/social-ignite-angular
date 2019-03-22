import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Request} from '../../../models/Request';
import {timeout} from "rxjs/operators";


@Injectable()


export class RequestService {
  private errorCodes: any = {
    FailedAPIConnection: {id: 1, details: 'Failed to connect to API'},
    NotLoggedOn: {id: 14, detail: 'You are no-longer logged on.'},
    RateLimitExceeded: {id: 30, detail: 'You have been rate-limited, please wait %s.'},
  };

  private platforms: any = {
    0: {id: "facebook", detail: "Facebook"},
    1: {id: "twitter", detail: "Twitter"},
    4: {id: "instagram", detail: "Instagram"},
    5: {id: "linkedin", detail: "LinkedIn"},
    facebook: {id: 0, detail: "Facebook"},
    instagram: {id: 4, detail: "Instagram"},
    linkedin: {id: 5, detail: "LinkedIn"},
    twitter: {id: 1, detail: "Twitter"},
  };

  private platformErrors: any = {};


  constructor(private http: HttpClient) {
    let self = this;
    this.get('metadata').then(function (data) {
      self.platformErrors = data.body.data.platformErrors;
      self.platforms = data.body.data.platforms;
      self.errorCodes = data.body.data.errorCodes;
    }).catch(function (err) {


    })

  }


  post(endpoint, parameters = {}, timeoutMs = 5000) {
    return this.http.post<Request>(
      environment.apiEndpoint + '/api/v1/' + endpoint, parameters, {
        withCredentials: true,
        observe: 'response',
        // timeout: timeout,
      }).pipe(timeout(timeoutMs)).toPromise().then(data => {
      const message = data.body;
      const status = data.status;
      if (message.data != null) {
        return {data: message.data, body: message};
      } else if (Number(status) == 200) {
        return {data: message.data, body: message};
      } else {
        throw {status, message: message.message, body: message};
      }
    }).catch((err) => {
      console.log(err);
      const status = err.status;
      if (status != -1) {
        switch (status) {
          case 401:
            // $rootScope.user = null;
            // $rootScope.loggedIn = false;
            // $cookies.put("redirect_on_login", $state.current.name);
            // $state.go('public.login', {});
            throw {
              status,
              message: this.errorCodes.NotLoggedOn.detail,
              body: this.errorCodes.NotLoggedOn.id
            };
          // cbFail(status, $rootScope.errorCodes.NotLoggedOn.detail, $rootScope.errorCodes.NotLoggedOn.id);
          // break;
          case 429:
            throw {
              status,
              message: this.errorCodes.RateLimitExceeded.detail
                .replace('%s', ((err.headers('x-ratelimit-pathreset') - new Date().getTime()) / 1000).toFixed(0) + ' seconds'),
              body: this.errorCodes.RateLimitExceeded.id
            };
          default:
            const message = err.data.message;
            throw {
              status,
              message: Number.isNaN(message.toString()) ? message : this.errorCodes[message].detail,
              body: message
            };
        }
      } else {
        throw {status, message: this.errorCodes.FailedAPIConnection.details};
      }
    });
  }

  // formPost(endpoint, parameters = {}) {
  //   return this.http.post<Request>(
  //     environment.apiEndpoint + '/api/v1/' + endpoint, parameters, {
  //       withCredentials: true,
  //       reportProgress: true,
  //       observe: 'events'
  //     }).toPromise().then(data => {
  //     const message = data.body;
  //     const status = data.status;
  //     if (message.data != null) {
  //       return {data: message.data, body: message};
  //     } else if (Number(status) == 200) {
  //       return {data: message.data, body: message};
  //     } else {
  //       throw {status, message: message.message, body: message};
  //     }
  //   }).catch((err) => {
  //     console.log(err);
  //     const status = err.status;
  //     if (status != -1) {
  //       switch (status) {
  //         case 401:
  //           // $rootScope.user = null;
  //           // $rootScope.loggedIn = false;
  //           // $cookies.put("redirect_on_login", $state.current.name);
  //           // $state.go('public.login', {});
  //           throw {
  //             status,
  //             message: this.errorCodes.NotLoggedOn.detail,
  //             body: this.errorCodes.NotLoggedOn.id
  //           };
  //         // cbFail(status, $rootScope.errorCodes.NotLoggedOn.detail, $rootScope.errorCodes.NotLoggedOn.id);
  //         // break;
  //         case 429:
  //           throw {
  //             status,
  //             message: this.errorCodes.RateLimitExceeded.detail
  //               .replace('%s', ((err.headers('x-ratelimit-pathreset') - new Date().getTime()) / 1000).toFixed(0) + ' seconds'),
  //             body: this.errorCodes.RateLimitExceeded.id
  //           };
  //         default:
  //           const message = err.data.message;
  //           throw {
  //             status,
  //             message: Number.isNaN(message.toString()) ? message : this.errorCodes[message].detail,
  //             body: message
  //           };
  //       }
  //     } else {
  //       throw {status, message: this.errorCodes.FailedAPIConnection.details};
  //     }
  //   });
  // }


  get(endpoint: string, parameters = {}, timeoutMs = 5000) {
    return this.http.get<any>(environment.apiEndpoint + '/api/v1/' + endpoint, {
      params: parameters,
      withCredentials: true,
      observe: 'response',
    }).pipe(timeout(timeoutMs)).toPromise().then(data => {
      const message = data.body;
      const status = data.status;
      if (message.data != null || Number(status) == 200) {
        return {data: message.data, body: message};
      } else {
        throw {status, message: message, body: message};
      }
    }).catch((err) => {
      const status = err.status;
      if (status != -1) {
        switch (status) {
          case 401:
            // $rootScope.user = null;
            // $rootScope.loggedIn = false;
            // $cookies.put("redirect_on_login", $state.current.name);
            // $state.go('public.login', {});
            throw {
              status,
              message: this.errorCodes.NotLoggedOn.detail,
              body: this.errorCodes.NotLoggedOn.id
            };
          // cbFail(status, $rootScope.errorCodes.NotLoggedOn.detail, $rootScope.errorCodes.NotLoggedOn.id);
          // break;
          case 429:
            throw {
              status,
              message: this.errorCodes.RateLimitExceeded.detail
                .replace('%s', ((err.headers('x-ratelimit-pathreset') - new Date().getTime()) / 1000).toFixed(0) + ' seconds'),
              body: this.errorCodes.RateLimitExceeded.id
            };
          // cbFail(status, $rootScope.errorCodes.RateLimitExceeded.detail.replace("%s", ((data.headers('x-ratelimit-pathreset') - new Date().getTime()) / 1000).toFixed(0) + ' seconds'), $rootScope.errorCodes.RateLimitExceeded.id);
          // break;
          default:
            // let message = err.data.message;
            throw {
              status,
              message: Number.isNaN(err.toString()) ? err : this.errorCodes[err].detail,
              body: err
            };
        }
      } else {
        throw {status, message: this.errorCodes.FailedAPIConnection.details};
      }
    });
  }


}
