import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LeaderRating } from '../models/leaderrating';
import { APIURL } from '../../environments/environment.prod';


const ApiUrl = 'https://churchyelpapi.azurewebsites.net/api';

@Injectable()
export class LeaderratingService {

  constructor(private _http: HttpClient) { }

  createLeaderRating(leaderrating: LeaderRating) {
    return this._http.post(`${ApiUrl}/Leaderratings`, leaderrating, { headers: this.getHeaders()});
  }

  getLeaderRatings() {
    return this._http.get(`${ApiUrl}/LeaderRatings`, {headers: this.getHeaders() });
  }

  getLeaderRating(id: string) {
    return this._http.get(`${ApiUrl}/LeaderRatings/${id}`, { headers: this.getHeaders() });
  }

  updateLeaderRating(leaderrating: LeaderRating) {
    return this._http.put(`${ApiUrl}/LeaderRatings`, leaderrating, { headers: this.getHeaders() });
  }
  deleteLeaderRating(id: number) {
    return this._http.delete(`${ApiUrl}/Leaderratings/${id}`,{ headers: this.getHeaders()});
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
