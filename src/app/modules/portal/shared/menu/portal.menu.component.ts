declare var require: any;

import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import { IgxNavigationDrawerComponent } from "igniteui-angular";
import {Router} from "@angular/router";



@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'socialignite-portal-menu',
  template: require('./portal.menu.component.html'),
  styleUrls: ['./portal.menu.component.css']
})

export class PortalMenuComponent {


  public navItems = [
    { name: "dashboard", text: "Dashboard", link: "dashboard"},
    { name: "add_circle", text: "Post", link: "post"},
    { name: "calendar_today", text: "Calendar", link: "calendar"},
    { name: "layers", text: "Pages", link: "pages"},
    { name: "photo_library", text: "Images", link: "photos"},
    { name: "fingerprint", text: "Admin", link: "admin"},
    { name: "shopping_cart", text: "Billing", link: "billing"},
    { name: "group", text: "Team", link: "team"},

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
