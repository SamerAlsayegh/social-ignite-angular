import {Injectable} from '@angular/core';
import {RequestService} from '../../shared/Request/request.service';
import {Error} from "tslint/lib/error";


@Injectable()


export class ImageService {

  constructor(private Request: RequestService) {
  }

  async getDetails(imageId) {
    if (imageId == null) throw new Error('Missing Image Id');
    return this.Request.get('portal/image/' + imageId);
  }

  async getImages(filter, pagination) {
    return this.Request.get('portal/image/', Object.assign(pagination ? {pagination: pagination} : {}, filter || {}));
  }

  // TODO: Add formPost for images allowing progress listening.
  async addImage(parameters) {
    throw new Error('Not implement yet');
    // if (parameters == null) throw new Error('Missing Image');
    // return this.Request.formPost('portal/image/', parameters);
  }

  async modifyImage(imageId, parameters) {
    if (imageId == null) throw new Error('Missing Image Id');
    return this.Request.post('portal/image/' + imageId);
  }

  async deleteImage(imageId) {
    if (imageId == null) throw new Error('Missing Image Id');
    return this.Request.post('portal/image/' + imageId + '/delete');
  }
}
