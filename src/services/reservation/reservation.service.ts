import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(protected http: HttpClient) { }

  getReservations() {
    return this.http.get('http://localhost:51938/reservas');
  }

   getReservartionForLabs(year: number, month: number, day: number, hour: number) {
    return this.http.get('http://localhost:51938/reservas/' + year + '/' + month + '/' + day + '/' + hour);
  }
}
