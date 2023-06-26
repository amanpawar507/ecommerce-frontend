import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{


  public product: any = [];
  public grandTotal!: number ;
  constructor(private router: Router, private cartService: CartService){

  }
  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.product = res;
      this.grandTotal = this.cartService.getTotalPrice()
    })
  }

  homeRedirect(){
    this.router.navigate(['/home']);
  }
  
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }

  emptyCart(){
    this.cartService.removeAllCart();
  }
}
