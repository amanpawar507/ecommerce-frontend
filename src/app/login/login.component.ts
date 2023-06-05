import { Component, OnInit } from '@angular/core';
import { Cart, User } from '../user';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  user: User = new User();
  constructor(private api: ApiService, private router: Router){}
  ngOnInit(): void {
    
  }

  loginCustomer() {
    const observer: Observer<any> = {
      next: (response: any) => {
        // Handle the response response
        console.log(response);
        this.user.username = response.username;
        this.user.password = response.password;
        this.user.email = response.email;
        this.user.id = response.id;
        this.user.mobile = response.mobile;
        this.user.firstName = response.firstName;
        this.user.lastName = response.lastName;
        this.user.gender = response.gender;
        this.user.cart = response.cart;
        this.user.creditCards = response.creditCards;
        this.user.addresses = response.addresses;

        alert("Login Successful");
      },
      error: (error: any) => {
        alert("Incorrect username or password");
      },
      complete: () => {
        // Optional: Handle the completion event if needed
      },
    };
  
    this.api.loginCustomer(this.user).subscribe(observer);
  }

  homeRedirect(){
    this.router.navigate(['/home']);
  }


}
