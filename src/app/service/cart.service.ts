import { Injectable, OnInit } from '@angular/core';
import { User } from '../user';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService  implements OnInit {
  
  user!: User;
  public cartItemList:any = [];
  public productList = new BehaviorSubject<any>([])


  constructor(private apiService: ApiService) { }

  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product: any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addToCart(product: any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }
  getTotalPrice(): number{
    let grandTotal = 0;
    this.cartItemList.map((a: any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id = a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList =[];
    this.productList.next(this.cartItemList);
  }


  ngOnInit(): void {
    this.apiService.getUserDetails(this.user).subscribe({
      next: (data) => {
        // Map the received data to the 'User' class
        this.user = new User();
        this.user.username = data.username;
        this.user.password = data.password;
        this.user.id = data.id;
        this.user.cart = data.cart
        this.user.cart.cartId = data.cart.cartId;
        this.user.creditCards = data.creditCards;
        this.user.addresses = data.addresses;
      },
      error: (error) => {
        console.error('Error retrieving user details:', error);
      },      
      complete: () => {
        
      },
    });
  }

  

}
