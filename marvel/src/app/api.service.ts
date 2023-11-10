import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}
  makeRequest() :Observable<any> {
    return this.http.get('https://gateway.marvel.com:443/v1/public/characters?apikey=a62aaa915b9f15a07a9a282ea7beb823')
  }
  stillSee(id: string | null) :Observable<any>{
    return this.http.get('https://gateway.marvel.com:443/v1/public/characters?apikey=a62aaa915b9f15a07a9a282ea7beb823/'+ id)
  }
}
