declare var require: any;

import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'socialignite-auth-component',
    template: require('./auth.component.html'),
    // styleUrls: ['./home.component.css']
})
export class AuthComponent implements OnInit {
    private env: any;

    constructor(private router: Router) {
        this.env = environment;
    }

    ngOnInit() {
        console.log('configured routes: ', this.router.config);
    }

}
