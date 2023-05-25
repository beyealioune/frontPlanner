import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InscriptionServiceService {

  private createUserUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  createUser(user: any) {
    return this.http.post(this.createUserUrl, user);
  }
}
