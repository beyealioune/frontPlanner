import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  private apiUrl = 'http://localhost:8080'; // Remplacez cette URL par l'URL de votre API back-end

  constructor(private http: HttpClient) { }

  // Méthode pour mettre à jour la couleur d'un utilisateur
  updateUserColor(userId: number, color: string): Observable<any> {
    const url = `${this.apiUrl}/users/${userId}/color`;
    return this.http.put(url, { couleur: color });
  }

  private apiUrl2 = 'http://localhost:8080/users/friends';
  private apiUrl3 = 'http://localhost:8080/users';


  createFriend(friend: any) {
    return this.http.post(`${this.apiUrl2}/`, friend);
  }

  updateFriend(friendId: number, friend: any) {
    return this.http.put(`${this.apiUrl3}/${friendId}`, friend);
  }






}

