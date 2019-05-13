import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = 'https://churchyelpapi.azurewebsites.net'

@Injectable({
  providedIn: 'root'
})
export class ChurchService {

  constructor(private _http: HttpClient) { }

  getChurch() {
    return this._http.get(`${ApiUrl}/Church`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
  }
}
