import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Request} from '../../models/Request';


@Injectable()


export class RequestService {
  private errorCodes: any;

  constructor(private http: HttpClient) {
    this.errorCodes = {
      FailedAPIConnection: {id: 1, details: 'Failed to connect to API'},
      NotLoggedOn: {id: 14, detail: 'You are no-longer logged on.'},
      RateLimitExceeded: {id: 30, detail: 'You have been rate-limited, please wait %s.'},
    };
  }


  post(endpoint, parameters) {
    return this.http.post<Request>(
      environment.apiEndpoint + '/api/v1/' + endpoint, parameters, {
        withCredentials: true,
        observe: 'response'
      }).toPromise().then(data => {
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

  get(endpoint: string, parameters = {}) {
    return this.http.get<any>(environment.apiEndpoint + '/api/v1/' + endpoint, {
      params: parameters,
      withCredentials: true,
      observe: 'response'
    }).toPromise().then(data => {
      const message = data.body;
      const status = data.status;
      if (message.data != null || Number(status) == 200) {
        return {data: message.data, body: message};
      } else {
        throw {status, message: message, body: message};
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
          // cbFail(status, $rootScope.errorCodes.RateLimitExceeded.detail.replace("%s", ((data.headers('x-ratelimit-pathreset') - new Date().getTime()) / 1000).toFixed(0) + ' seconds'), $rootScope.errorCodes.RateLimitExceeded.id);
          // break;
          default:
            console.log(err);
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
