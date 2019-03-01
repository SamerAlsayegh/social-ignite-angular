declare var require: any;

import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';


import {Component, OnInit} from '@angular/core';

@Component({
  template: require('./portal.component.html'),
  // styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
  private env: any;
  public title = "Samples";

  constructor(private router: Router) {
    this.env = environment;
  }

  ngOnInit() {

  }

}
