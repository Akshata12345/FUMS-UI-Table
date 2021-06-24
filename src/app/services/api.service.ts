import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "https://api.instantwebtools.net/v1/passenger?page=0&size=10"

  constructor( private http : HttpClient ) { }

  getDetails () {
    return this.http.get(this.url)
  }
}
