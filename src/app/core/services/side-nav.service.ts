import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SideNavService {
  private show: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  get visibilityOfMenu$() {
    return this.show.asObservable();
  }

  set showMenu(isVisible: boolean) {
    this.show.next(isVisible);
  }
}