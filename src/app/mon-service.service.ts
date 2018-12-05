import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonServiceService {

  stagiaires = [];
  jsonURL = 'assets/stagiaires.json';
  ApiUrl = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) { }

  // donnees(){
  //   return this.stagiaires;
  // }

  donneesJSON(){
    return this.http.get(this.jsonURL);
  }
  donneesApi(){
    return this.http.get(this.ApiUrl);
  }

  getUserById(id) {
    return this.http.get(this.ApiUrl+id);
}
  
}
