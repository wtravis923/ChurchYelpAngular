import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const ApiUrl = 'https://churchyelp.azurewebsites.net/api';

@Injectable()
export class LeaderratingService {

  constructor(private _http: HttpClient) { }

  getLeaderRating() {
    return this._http.get(`${ApiUrl}/LeaderRatings`, {headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer $(localStorage.getItem('id_token')}`);
  }
}
