import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChurchRating } from '../models/ChurchRating';

const ApiUrl = 'https://churchyelpapi.azurewebsites.net/api'

@Injectable({
  providedIn: 'root'
})

export class ChurchRatingsService {

  constructor(private _http: HttpClient) { }

  getChurchRatings() {
    return this._http.get(`${ApiUrl}/ChurchRating`, { headers: this.getHeaders() });
  }

  createChurchRating(churchRating: ChurchRating) {
    return this._http.post(`${ApiUrl}/ChurchRating`, churchRating, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
