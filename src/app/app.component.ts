import { Component } from '@angular/core';
import { SideNavService } from './core/services/side-nav.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isVisible$: Observable<boolean> = new Observable();

  constructor(private sideNavService: SideNavService) {
    this.isVisible$ = this.sideNavService.visibilityOfMenu$;
  }
}