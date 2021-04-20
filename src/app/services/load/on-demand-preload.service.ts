import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnDemandPreloadService {

  private subject = new Subject<OnDemandPreloadOptions>()
  state = this.subject.asObservable()

  constructor() { }

  startPreload(routePath: string) {
    const options = new OnDemandPreloadOptions(routePath, true)
    this.subject.next(options)
  }
}

export class OnDemandPreloadOptions{
  constructor(public routePath: string, public preload: boolean = true){}
}

