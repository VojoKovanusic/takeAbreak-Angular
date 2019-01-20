import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http'; 
import { User } from '../model/User';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
 

  constructor(private http: HttpClient) {
    this.http = http;
   }

   saveUser(user: any): Observable<any> {
     const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
     return this.http.post("http://localhost:8090/registration", user, {headers: headers});
   }

   loginUser(user: any): Observable<any> {
     const headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
     return this.http.post("http://localhost:8090/login", user, {headers: headers});
   }

   getAllUsers(token: any): Observable<any> {
     const headers = new HttpHeaders({'Authorization': 'Bearer '+token});
     return this.http.get("http://localhost:8090/users", {headers: headers});
   }
   getAllUsersOnPauseNow(token: any): Observable<any> {
    const headers = new HttpHeaders({'Authorization': 'Bearer '+token});
    return this.http.get("http://localhost:8090/users/on/pause", {headers: headers});
  }
  getAllUsersOnPauseToday(token: any): Observable<any> {
    const headers = new HttpHeaders({'Authorization': 'Bearer '+token});
    return this.http.get("http://localhost:8090/users/on/pause/today", {headers: headers});
  }

   getUser(token: any): Observable<any> {
     const headers = new HttpHeaders({'Authorization': 'Bearer '+token});
     return this.http.get("http://localhost:8090/getUser", {headers: headers});
   }
   takePause(user:User,token: any): Observable<any> {
    const headers = new HttpHeaders({'Authorization': 'Bearer '+token});
    return this.http.put("http://localhost:8090/user/take/break",user, {headers: headers});
  }
  checkIsEmailExist(token: any,control: AbstractControl): any {
    const headers = new HttpHeaders({'Authorization': 'Bearer '+token});
    return this.http.put("http://localhost:8090//check/email", {headers: headers});
}
    checkUsername(token: any,control: AbstractControl): any {
      const headers = new HttpHeaders({'Authorization': 'Bearer '+token});
      return this.http.put("http://localhost:8090//check/username"+control, {headers: headers});
    }


}
