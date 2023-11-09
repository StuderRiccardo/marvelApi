import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}
  makeRequest() :Observable<any> {
    return this.http.get('http://*.marvel.com/apigateway/v1/public/comics?ts=1&apikey=a62aaa915b9f15a07a9a282ea7beb823&hash=188b0ef09e939a6b8ff2c85532395c5e23f1857baa62aaa915b9f15a07a9a282ea7beb823/')
  }
}
