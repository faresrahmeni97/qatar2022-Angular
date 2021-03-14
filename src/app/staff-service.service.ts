import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffServiceService {

  private baseUrl = 'http://localhost:8090/api/staffs';

  constructor(private http: HttpClient) { }

  getStaff(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createStaff(staff: Object): Observable<Object> {
    return this.http.post(`http://localhost:8090/api/staffadd`, staff);
  }

  updateStaff(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteStaff(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getStaffsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
}
 

}
