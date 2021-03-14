import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipe } from './equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeServiceService {

  private baseUrl = 'http://localhost:8090/api/equipes';

  constructor(private http: HttpClient) { }

  getEquipe(id: number):Observable<any> {
    return this.http.get(`http://localhost:8090/api/equipe/${id}`);
  }

  createEquipe(equipe: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, equipe);
  }

  updateEquipe(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEquipe(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEquipesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
}
}
