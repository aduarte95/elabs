import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APIurlService} from '../APIurl/apiurl.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(protected http: HttpClient, protected apiUrl: APIurlService) { }

  getReservations() {
    return this.http.get(this.apiUrl.getURL() + '/reservas');
  }

   getReservartionForLabs(year: number, month: number, day: number, hour: number) {
    return this.http.get(this.apiUrl.getURL() + '/reservas/' + year + '/' + month + '/' + day + '/' + hour);
  }
}
