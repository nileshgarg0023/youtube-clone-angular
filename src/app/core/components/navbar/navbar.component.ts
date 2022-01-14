import { Component } from '@angular/core';
import { SideNavService } from '../../services/side-nav.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private sideNavService: SideNavService) {}

  async changeMenu() {
    const isVisible = await this.sideNavService.visibilityOfMenu$
      .pipe(take(1))
      .toPromise();
    this.sideNavService.showMenu = isVisible ? false : true;
  }
}