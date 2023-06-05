import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  user!: User;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getUserDetails(this.user).subscribe({
      next: (data) => {
        // Map the received data to the 'User' class
        this.user = new User();
        this.user.username = data.username;
        this.user.password = data.password;
        this.user.email = data.email;
        this.user.id = data.id;
        this.user.mobile = data.mobile;
        this.user.firstName = data.firstName;
        this.user.lastName = data.lastName;
        this.user.gender = data.gender;
        this.user.cart = data.cart;
        this.user.creditCards = data.creditCards;
        this.user.addresses = data.addresses;
      },
      error: (error) => {
        console.error('Error retrieving user details:', error);
      }
    });
  }
  

}
