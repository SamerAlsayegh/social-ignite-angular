declare var require: any

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: require('./app.component.html'),
    // styleUrls: ['./home.component.css']
})
export class AppComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}