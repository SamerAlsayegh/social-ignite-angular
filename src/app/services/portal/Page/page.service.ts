import {Injectable} from '@angular/core';
import {RequestService} from '../../shared/Request/request.service';


@Injectable()


export class PageService {

  constructor(private Request: RequestService) {

  }

  async getPages(parameters) {
    try {
      return (await this.Request.get('portal/social_pages', parameters)).data;
    } catch (e) {
      // Log Error?
      return null;
    }
  }
  async getPage(pageId) {
    try {
      return (await this.Request.get('portal/social_pages/'+pageId)).data;
    } catch (e) {
      // Log Error?
      return null;
    }
  }
}
