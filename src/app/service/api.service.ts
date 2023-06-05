import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
import { User } from '../user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  private newBase = "http://localhost:8088/api/customers/"
  private baseUrl = "http://localhost:8088/api/customers/login"

  getProduct(){
    return this.http.get<any>("http://localhost:8088/api/storeitems/getAllItems")
    .pipe(map((res: any)=>{
      return res;
    }))
  }

  loginCustomer(user: User):Observable<object>{
    console.log(user);
    return this.http.post(`${this.baseUrl}`, user);
  }

  getUserDetails(user: User): Observable<User> {
    return this.http.get<User>(`${this.newBase}+1` );
  }
}
