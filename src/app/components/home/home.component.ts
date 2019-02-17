declare var require: any

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    template: require('./home.component.html'),
    // styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
