import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../../services/shared/User/user.service';
import {AlertService} from "../../../../../services/shared/Alert/alert.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PageService} from "../../../../../services/portal/Page/page.service";

declare var require: any;

@Component({
  selector: 'socialignite-pages-component',
  template: require('./pages.component.html'),
  styleUrls: ['./pages.component.scss']
})


export class PagesComponent implements OnInit {
  pagesData = {pages:[]};

  constructor(private pageService: PageService, private userService: UserService, private alert: AlertService, private router: Router, private route: ActivatedRoute ) {
  }
  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: '' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }
  ];
  public chartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 1,
    }
  ];

  public chartOptions: any = {
    responsive: false,
    legend: {
      display: false
    },
    elements: {
      line: {
        fill: false,

        borderColor: '#000000',
        borderWidth: 1
      },
      point: {
        radius: 1
      }
    },
    tooltips: {
      enabled: false
    },
    scales: {
      yAxes: [
        {
          display: false
        }
      ],
      xAxes: [
        {
          display: false
        }
      ]
    }
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  async ngOnInit() {
    this.pagesData = await this.pageService.getPages(null);
    console.log(this.pagesData.pages);
  }
}
