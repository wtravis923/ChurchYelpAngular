import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Leader } from '../models/Leader';

const ApiUrl = 'https://churchyelp.azurewebsites.net/api';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor (private _http:HttpClient) { }

  getLeader(){
    return this._http.get(`${ApiUrl}/Leader`, {headers: this.getHeaders() });
  }

  createLeader(leader: Leader) {
    return this._http.post(`${ApiUrl}/Leaders`, leader, {headers: this.getHeaders()});
  }

  getLocaleDayPeriods(id: string){
    return this._http.get(`${ApiUrl}/Leaders/${id}`, {headers: this.getHeaders()});
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem(`id_token`)}`);
  }
}
