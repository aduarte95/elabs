import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class BuildsService {

  constructor(protected http: HttpClient) { }

  getBuilds() {
    return this.http.get('http://localhost:51938/builds');
  }
}
