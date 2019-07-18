import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APIurlService} from '../APIurl/apiurl.service';

@Injectable({
  providedIn: 'root'
})
export class BuildsService {

  constructor(protected http: HttpClient, protected apiUrl: APIurlService) { }

  getBuilds() {
    return this.http.get(this.apiUrl.getURL() + '/builds');
  }
}
