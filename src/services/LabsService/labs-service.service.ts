import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APIurlService} from '../APIurl/apiurl.service';

@Injectable({
  providedIn: 'root'
})
export class LabsServiceService {

  constructor(protected http: HttpClient, protected apiUrl: APIurlService) { }

  getLabs() {
    return this.http.get(this.apiUrl.getURL() + '/labs');
  }

  getLabsByBuild(build: string ) {
    return this.http.get(this.apiUrl.getURL() + '/labs/' + build);
  }
}
