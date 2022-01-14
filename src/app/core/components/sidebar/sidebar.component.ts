import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SideNavService } from '../../services/side-nav.service';
import { sidebarData } from './constants/sidebar.constants';
import { ISideBar, ISideBarItem } from './models/sidebar.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isVisible$: Observable<boolean> = new Observable();
  menu: ISideBar[] = [];
  itemSelected: ISideBarItem | null = null;

  constructor(private sideNavService: SideNavService) {
    this.menu = sidebarData.map(
      (section): ISideBar => ({
        ...section,
        mustShowInHide: section.items.some((item) => item.renderInHide),
      })
    );
  }

  ngOnInit(): void {
    this.isVisible$ = this.sideNavService.visibilityOfMenu$;
  }
}