import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderTalkerService {
  sendBuildsToInitScreen = new EventEmitter();
  changeButtonCarousel = new EventEmitter();
  constructor() { }

  sendBuilds(build: string) {
    this.sendBuildsToInitScreen.emit(build);
  }

  labsTalks(type: number) {
    this.changeButtonCarousel.emit({type});
  }

  reservationsTalks(type: number, labs: object, lab: string) {
    let indice = 0;
    while (labs[indice].numer !== lab) {
      indice++;
    }
    this.changeButtonCarousel.emit({type, labs, indice});
  }
}
