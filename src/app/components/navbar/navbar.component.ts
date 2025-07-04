import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  isLoggedInUser: boolean = false;
  userName: string | null = null;

  constructor(private authService:AuthService){}

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe({
      next: (value) => {
        this.isLoggedInUser = value;
      }
    });
    this.authService.currentUserNameSubject.subscribe({
      next:(value) => {
        this.userName = value;
      }
    })
  }

  logoutUser() {
    this.authService.logOut()
  }
}
