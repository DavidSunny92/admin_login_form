import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getEmpDetails(): Observable<any> {
    return this.http.get('/api/v1/employees');

  }

  createEmp(data): Observable<any> {
    return this.http.post('/api/v1/create', data)
  }

  updateEmp(data, id): Observable<any> {
    return this.http.put(`/api/v1/update/${id}`, data)
  }

  viewEmp(id): Observable<any> {
    return this.http.get(`/api/v1/employee/${id}`);
  }
  deleteEmp(id): Observable<any> {
    return this.http.delete(`/api/v1/delete/${id}`);
  }
}
