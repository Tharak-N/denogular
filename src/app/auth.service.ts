import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import jwt_decode  from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  credentials: any  = null;

  constructor(
    private http: HttpClient
  ) {
  }

  login(_credentails: any){
    return this.http.post('http://localhost:3400/login', _credentails)
    .pipe(
      map((response: any) => {
        if(response){
          this.decodeJwtToken(response)
          return true
        }
        return false
      })
      )
    }

  decodeJwtToken(response:any){
    let decodedToken = jwt_decode(response.token)
    console.log("the decoded token is", decodedToken)

    this.setLocalStorage({
      response,
      decodedToken
    })
  }

  setLocalStorage(credentials: any){
    console.log("the response before setting in the local storage is", credentials)
    this.credentials = JSON.stringify(credentials);
    localStorage.setItem('credentials', this.credentials)
  }

  isLoggedIn(){
    if(!!this.credentials) return true;
    // localStorage.clear()
    else {
      if(!!localStorage.getItem('credentials')) return true
      else return false
    }
  }

  getToken(){
    // if(!!this.credentials){
    //   let credentials = JSON.parse(this.credentials) as string);
    //   let token = credentials.response.token
    //   return token
    // }

    if(!!localStorage.getItem('credentials')){
      let credentials = JSON.parse(localStorage.getItem('credentials') as string);
      let token = credentials.response.token
      return token
    }
    return null
  }

  logout(){
    localStorage.removeItem('credentials')
  }

}
