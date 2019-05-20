import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Leader } from '../models/Leader';
import { APIURL } from '../../environments/environment.prod';

const ApiUrl = 'https://churchyelpapi.azurewebsites.net/api';

@Injectable({
  providedIn: 'root'
})

export class LeaderService {

  constructor (private _http: HttpClient) { }

  getLeaders(){
    return this._http.get(`${ApiUrl}/Leader`, {headers: this.getHeaders() });
  }

  getLeader(id: string) {
    return this._http.get(`${ApiUrl}/Leader/${id}`, {headers: this.getHeaders()});
  }

  createLeader(leader: Leader) {
    return this._http.post(`${ApiUrl}/Leader`, leader, {headers: this.getHeaders() });
  }

  updateLeader(leader: Leader) {
    return this._http.put(`${ApiUrl}/Leader`, leader, {headers: this.getHeaders()});
  }

  deleteLeader(id: number) {
    return this._http.delete(`${ApiUrl}/Leader/${id}`, {headers: this.getHeaders()});
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
