import {MenuService} from "../../../../services/shared/Menu/menu.service";
import {Component, Input, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";

declare var require: any;


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'socialignite-portal-top-menu',
  template: require('./portal.top-menu.component.html'),
  styleUrls: ['./portal.top-menu.component.css']
})

export class PortalTopMenuComponent {
  @Input()
  pageName: string;

  constructor(private Menu: MenuService, private router: Router) {
  }

  ngOnInit() {
    this.Menu.dataString$.subscribe(data => {
      this.pageName = data;
    });
  }

  /** Select item and close drawer if not pinned */
  public navigate(item) {
    let self = this;
    this.Menu.setTitle(item.text);
    this.router.navigate(['/' + item.link]);
  }

}
