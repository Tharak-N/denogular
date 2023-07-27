import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { APIService } from '../api.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  private apiService = inject(APIService)

  getAboutme(){
    this.apiService.getAboutme().subscribe((resp: any) => {
      console.log("the response of about me is", resp)
    })
  }
}
