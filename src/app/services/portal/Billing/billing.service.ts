import {Injectable} from '@angular/core';
import {RequestService} from '../../shared/Request/request.service';


@Injectable()


export class BillingService {
  private user: any;
  private loggedIn: boolean;

  constructor(private Request: RequestService) {
  }

  async subscribePlan(plan, service) {
    return this.Request.post('payment/subscription/' + plan + '/' + service, {}, 20000);
  }

  async redeemCode(code) {
    return this.Request.post('payment/redeem', {code: code}, 20000);
  }

  async getSubscription() {
    return this.Request.get('payment/subscription');
  }

  async getPlans(includeFree) {
    return this.Request.get('payment/plans', {free: includeFree});
  }

  async getPlan(plan) {
    return this.Request.get('payment/plans/' + plan);
  }

  async cancelSubscription() {
    return this.Request.post('payment/subscription/cancel');
  }

  async getTransactions(sortOrder, page, limit) {
    return this.Request.get('payment/transactions', {sort: sortOrder, page, limit});
  }

}
