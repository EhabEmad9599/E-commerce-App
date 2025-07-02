import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  isLoggedInUser = false;

  constructor(private authService:AuthService){}

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe({
      next: (value) => {
        this.isLoggedInUser = value;
      }
    })
  }

  logoutUser() {
    this.authService.logOut()
  }
}
