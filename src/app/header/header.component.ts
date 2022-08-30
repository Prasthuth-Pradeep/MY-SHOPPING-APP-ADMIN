import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navStatus: boolean = false;
  toggleBarClass: string = 'toggle-circle-left';

  constructor(private sharedService: SharedService) { }

  async ngOnInit(): Promise<void> {
  }

  onCollapseSideNav() {
    if (this.navStatus == false) {
      this.sharedService.clickEventCollapseSideNav(true);
      this.navStatus = true;
      this.toggleBarClass = 'toggle-circle-right'
    } else if (this.navStatus == true) {
      this.sharedService.clickEventCollapseSideNav(false);
      this.navStatus = false;
      this.toggleBarClass = 'toggle-circle-left'
    }
  }

}
