import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnexionServiceService {

  private baseUrl = 'http://localhost:8080/api/authenticate';
 
  constructor(private http: HttpClient) { }
 
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}`, {
      username,
      password
    });
  }
}
