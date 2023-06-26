import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  public totalItem: number = 0;
  constructor(private router: Router, private cartService: CartService){

  }
  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.totalItem = res.length;
    })
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
