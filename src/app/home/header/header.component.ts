import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router){

  }

  loginRedirect(){
    this.router.navigate(['/login']);
  }

  cartRedirect(){
    this.router.navigate(['/cart']);
  }

  homeRedirect(){
    this.router.navigate(['/home']);
  }

  profileRedirect(){
    this.router.navigate(['/profile']);
  }
}
