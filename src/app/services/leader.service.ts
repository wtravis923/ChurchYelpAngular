import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const ApiUrl = 'https://churchyelp.azurewebsites.net/api';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor (private _http:HttpClient) { }

  getLeader(){
    return this._http.get(`${ApiUrl}/Leader`, {headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem(`id_token`)}`);
  }
}
