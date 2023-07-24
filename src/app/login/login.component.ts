import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private http = inject(HttpClient)

  // constructor(private http: HttpClient){

  // }

  ngOnInit(){
    this.getLoginData()

    this.http.get<any>(
      'http://localhost:8800/about-me'
    ).subscribe((resp: any) => {
      console.log("resp is", resp)
    },
    // (error: any) => {
    //   console.log(error)
    // }
    )

  }

  getLoginData(){
    this.http.post<any>(
      'http://localhost:8800/login',
      {
        name: 'tharak',
        from: 'Angular'
      }
    )
  }



}
