import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnexionServiceService {
  navBoolean: any;


 
  constructor(private http: HttpClient) { }
 







  private url = 'http://localhost:8080/auth/login';


    
 updateData(data: any) {
  this.navBoolean.next(data);
}



  login(email: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'skipInterceptor': ''
      })
    };

    // const headers = new HttpHeaders({
    //   'skipInterceptor': '' // Ajoutez ce header pour ignorer l'intercepteur pour cette requête
    // });
    const body = {
      email: email,
      password: password
    };
    return this.http.post<any>(this.url, body, httpOptions);
  }

  getToken(): string|null {
    return localStorage.getItem('token');
  }


  isLoggedIn(): boolean {
    const token = this.getToken();
    if (token) {
      // Vérifier si le token est expiré
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > (Date.now() / 1000);
    } else {
      return false;
    }
  }


  logout(): void {
    localStorage.removeItem('token');
  }
  
  
  getUserById(id: number): Observable<any> {
  return this.http.get(`http://localhost:8080/users/${id}`);
}
}
