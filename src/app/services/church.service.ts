import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Church } from '../models/Church';

const ApiUrl = 'https://churchyelpapi.azurewebsites.net/api'

@Injectable()

export class ChurchService {

  constructor(private _http: HttpClient) { }

  getChurch () {
    return this._http.get(`${ApiUrl}/Church`, { headers: this.getHeaders()});
  }
  createChurch(church: Church) {
    return this._http.post(`${ApiUrl}/Church`, church, { headers: this.getHeaders()});
  }
  updateChurch(church: Church) {
    return this._http.put(`${ApiUrl}/Church`, church, { headers: this.getHeaders()});
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
}
}
