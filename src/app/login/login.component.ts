import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private http = inject(HttpClient)
  private router = inject(Router)
  private authService = inject(AuthService);
  private activeRoute = inject(ActivatedRoute);

  // constructor(private http: HttpClient){

  // }

  ngOnInit(){}

  getLoginData(){
    let credentials = {
      name: 'tharak',
      password: 1234
    }

    this.authService.login(credentials).subscribe(
      (res: any) => {
        if(res){
          let returnUrl = this.activeRoute.snapshot.queryParamMap.get('returnUrl') ?? null
          this.router.navigate([returnUrl ?? ''])
        }
      }
    )
  }





}
