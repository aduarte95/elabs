import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APIurlService} from '../APIurl/apiurl.service';
import {Observable} from 'rxjs';

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

    //postReservationInsertion(user: string, beginDate: string, endDate: string, lab: number, building: string, status: boolean){
      //  return this.http.get(this.apiUrl.getURL() + '/reservas/guardar/'+ user + '/' + beginDate + '/' + endDate + '/' + lab + '/' +  building + '/' + status );
    //}

}
