import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

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
  compact: boolean = false;

  constructor(private sharedService: SharedService) { }

  async ngOnInit(): Promise<void> {
    this.navBarStatus();
  }

  navBarStatus() {
    this.sharedService.isCollapseSideNav.subscribe((data) => {
      this.compact = data;
    });
  }

  onShowList(value: string) {
    if (value == 'p') {
      if (this.showListProduct == false) {
        this.showListProduct = true;
        this.showMoreIconProduct = 'hide';
      } else {
        this.showListProduct = false;
        this.showMoreIconProduct = 'show';
      }
    }
    if (value == 'o') {
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
