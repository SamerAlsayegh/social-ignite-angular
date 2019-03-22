import {Injectable, OnChanges, SimpleChanges} from '@angular/core';
import {Subject} from "rxjs/Subject";


@Injectable()


export class MenuService implements OnChanges{
  private menuPage: string;
  // Observable string source
  private dataStringSource = new Subject<string>();

  // Observable string stream
  dataString$ = this.dataStringSource.asObservable();
  constructor() {
  }

  getTitle():string {
    return this.menuPage;
  }


  setTitle(menuPage:string):void {
    this.menuPage = menuPage;
    this.dataStringSource.next(menuPage)
    console.log(menuPage);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }


}
