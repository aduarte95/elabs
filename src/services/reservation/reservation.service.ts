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
}
