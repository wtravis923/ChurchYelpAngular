import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Church } from '../models/Church';
import { APIURL } from '../../environments/environment.prod';

const ApiUrl = 'https://churchyelpapi.azurewebsites.net/api'

@Injectable( {
  providedIn: 'root'
})

export class ChurchService {

  constructor(private _http: HttpClient) { }

  getChurches () {
    return this._http.get(`${ApiUrl}/Church`, { headers: this.getHeaders() });
  }

  getChurch (id: string) {
    return this._http.get(`${ApiUrl}/Church/${id}`, { headers: this.getHeaders() });
  }

  createChurch(church: Church) {
    return this._http.post(`${ApiUrl}/Church`, church, { headers: this.getHeaders()});
  }
  
  updateChurch(church: Church) {
    return this._http.put(`${ApiUrl}/Church`, church, { headers: this.getHeaders()});
  }

  deleteChurch(id: number) {
    return this._http.delete(`${ApiUrl}/Church/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}