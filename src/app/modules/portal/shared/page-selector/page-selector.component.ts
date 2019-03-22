declare var require: any;

import {Component} from "@angular/core";


@Component({
  template: require('./page-selector.component.html'),
  // styleUrls: ['./page-selector.component.css']
})

export class PageSelectorComponent {


  public searchQuery = null;

  constructor() {

  }

}
