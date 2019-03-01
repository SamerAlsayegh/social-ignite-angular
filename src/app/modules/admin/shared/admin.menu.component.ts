declare var require: any;

import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import { IgxNavigationDrawerComponent } from "igniteui-angular";
import {Router} from "@angular/router";



@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'socialignite-portal-menu',
  template: require('./admin.menu.component.html'),
  styleUrls: ['./admin.menu.component.css']
})

export class AdminMenuComponent {


  public navItems = [
    { name: "dashboard", text: "Dashboard", link: "admin/dashboard"},
    { name: "group", text: "Members", link: "admin/members"},
    { name: "arrow_back", text: "User-mode", link: "dashboard"},

  ];
  public selected = "Dashboard";


  @ViewChild(IgxNavigationDrawerComponent)
  public drawer: IgxNavigationDrawerComponent;

  constructor(private router: Router) {

  }


  /** Select item and close drawer if not pinned */
  public navigate(item) {
    this.selected = item.text;
    this.router.navigate(['/' + item.link]);
    this.drawer.close();
  }

}
