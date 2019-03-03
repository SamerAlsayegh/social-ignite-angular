import {UserService} from "../../../../services/shared/User/user.service";

declare var require: any;

import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import { IgxNavigationDrawerComponent } from "igniteui-angular";
import {Router} from "@angular/router";
import {AlertService} from "../../../../services/shared/Alert/alert.service";



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
    { name: "verified_user", text: "Profile", link: "profile"},
    { name: "vpn_key", text: "Logout", link: "logout"},

  ];
  public selected = "Dashboard";


  @ViewChild(IgxNavigationDrawerComponent)
  public drawer: IgxNavigationDrawerComponent;

  constructor(private router: Router, private User: UserService, private Alert: AlertService) {

  }


  /** Select item and close drawer if not pinned */
  public navigate(item) {
    let self = this;

    if (item.link == "logout"){
      // Logout...
      this.User.logout().then(function(){
        self.router.navigate(['/login']);
      }).catch(function (err) {
        self.Alert.error("Failed to logout.")
      });

    } else {
      this.selected = item.text;
      this.router.navigate(['/' + item.link]);
    }
    this.drawer.close();
  }

}
