import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  showListProduct: boolean = false;
  showListOrders: boolean = false;
  showMoreIconProduct: string = 'show';
  showMoreIconOrder: string = 'show';

  constructor() { }

  async ngOnInit(): Promise<void> {
  }

  onShowList(value: string) {
    if(value == 'p'){
      if (this.showListProduct == false) {
        this.showListProduct = true;
        this.showMoreIconProduct = 'hide';
      } else {
        this.showListProduct = false;
        this.showMoreIconProduct = 'show';
      }
    }
    if(value == 'o'){
      if (this.showListOrders == false) {
        this.showListOrders = true;
        this.showMoreIconOrder = 'hide';
      } else {
        this.showListOrders = false;
        this.showMoreIconOrder = 'show';
      }
    }
  }
}
