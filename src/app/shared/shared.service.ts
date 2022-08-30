import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private isCollapseSideNavSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor() { }

  get isCollapseSideNav(): Observable<any> {
    return this.isCollapseSideNavSubject.asObservable();
  }
  public clickEventCollapseSideNav(status: boolean) {
    console.log('shared service', status)
    this.isCollapseSideNavSubject.next(status);
  }
}
