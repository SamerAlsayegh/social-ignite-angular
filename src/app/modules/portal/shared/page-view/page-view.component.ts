declare var require: any;

import {Component, Input, ViewEncapsulation} from "@angular/core";


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'socialignite-page-view',
  template: require('./page-view.component.html'),
  styleUrls: ['./page-view.component.scss']
})

export class PageViewComponent {

  @Input()
  page: object;

  constructor() {

  }

}
