import { Component } from '@angular/core';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MY-SHOPPING-APP-ADMIN';

  sideNavClass: string = 'side-nav';
  compact: boolean = false;
  constructor(private sharedService: SharedService) { }

  async ngOnInit(): Promise<void> {
    this.navBarStatus();
  }

  navBarStatus() {
    this.sharedService.isCollapseSideNav.subscribe((data) => {
      if (data == true) {
        this.sideNavClass = 'compact'
      } else if (data == false ){
        this.sideNavClass = 'side-nav'
      }
    });
  }
}
