import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable()

export class ErrorCodesService {
    private errorCodes: any;

    constructor(private http: HttpClient) {
        this.errorCodes = {
            FailedAPIConnection: {id: 1, details: 'Failed to connect to API'},
            NotLoggedOn: {id: 14, detail: 'You are no-longer logged on.'},
            RateLimitExceeded: {id: 30, detail: 'You have been rate-limited, please wait %s.'},
        };

    }
    loadErrors() {

    }

    getErrorCodes() {
        return this.errorCodes;
    }


}
