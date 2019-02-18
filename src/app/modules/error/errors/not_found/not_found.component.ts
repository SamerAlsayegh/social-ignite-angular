import {Component, OnInit} from '@angular/core';

declare var require: any;

@Component({
  selector: 'socialignite-not-found',
  template: require('./not_found.component.html'),
  providers: []
})


export class PageNotFoundComponent implements OnInit {

  constructor() {

  }

  async ngOnInit() {

  }
}
