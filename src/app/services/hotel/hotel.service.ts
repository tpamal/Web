import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  endpoint = 'http://localhost:3800/hotel/';
  httOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }

  constructor(private http: HttpClient) { }

  getHotels():Observable<any>{
    return this.http.get(this.endpoint + 'findAll', this.httOptions).pipe(map(this.extractData));
  }

  getHotel(search){
    var p = {search: search};
    var params = JSON.stringify(p);

    let httOptionsAuth = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };

    return this.http.post(this.endpoint + 'getHotel', params, httOptionsAuth).pipe(map(this.extractData))
  }  
}
