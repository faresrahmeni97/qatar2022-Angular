import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JoueurServiceService {

  private baseUrl = 'http://localhost:8090/api/joueurs';

  constructor(private http: HttpClient) { }

  getJoueur(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createJoueur(joueur: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, joueur);
  }

  updateJoueur(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteJoueur(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getJoueursList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
}
}
