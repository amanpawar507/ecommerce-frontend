import { Injectable, OnInit } from '@angular/core';
import { User } from '../user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CartService  implements OnInit {
  
  user!: User;

  constructor(private apiService: ApiService) { }

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
