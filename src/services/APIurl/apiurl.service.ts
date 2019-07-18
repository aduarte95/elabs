import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIurlService {
  private url = 'http://localhost:51938';
  // private url = 'http://10.1.4.142/elabs';

  constructor() { }

  getURL() {
    return this.url;
  }
}
