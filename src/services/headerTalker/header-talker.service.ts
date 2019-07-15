import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderTalkerService {
  sendBuildsToInitScreen = new EventEmitter();
  subsBar: Subscription;

  constructor() { }

  sendBuilds(build: string) {
    this.sendBuildsToInitScreen.emit(build);
  }
}
