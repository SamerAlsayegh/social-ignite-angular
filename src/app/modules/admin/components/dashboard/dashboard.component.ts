import {Component, OnInit} from '@angular/core';

declare var require: any;

@Component({
  selector: 'socialignite-dashboard-component',
  template: require('./dashboard.component.html'),
})


export class DashboardComponent implements OnInit {


  constructor() { }

  ngOnInit() {

  }
}
