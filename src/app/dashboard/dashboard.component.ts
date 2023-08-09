import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  private router = inject(Router)

  aboutme(){
    this.router.navigate(['/about-me'])
  }

  contact(){
    this.router.navigate(['contact'])
  }

  logout(){
    localStorage.removeItem('credentials')
    this.router.navigate(['/login'])
  }

  ngOnInit(){
    this.generateCryp().then((res: any) => console.log("Crypt res is", res))
  }

  async generateCryp(){
    let crypt = await crypto.subtle.generateKey(
      {
        name: "AES-GCM",
        length: 256,
      },
      true,
      ['encrypt', 'decrypt']
    )
    return crypt
  }

}
