import {Injectable} from '@angular/core';
import {ToastrService} from "ngx-toastr";


@Injectable()


export class AlertService {

  constructor(private toastr: ToastrService) {
  }

  async success(message, title = null, duration = 5000) {
    await this.toastr.success(message, title, {timeOut: duration});
  }


  async info(message, title = null, duration = 5000) {
    await this.toastr.info(message, title, {timeOut: duration});
  }

  async error(message, title = null, duration = 5000) {
    await this.toastr.error(message, title, {timeOut: duration});
  }

}
