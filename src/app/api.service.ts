import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class APIService {

  private readonly EndPoints = {
    aboutme: () => `http://localhost:3400/about-me`

  }


  constructor(
    private http: HttpClient
  ) { }



  getAboutme(){
    return this.http.get(this.EndPoints.aboutme())
  }
}
