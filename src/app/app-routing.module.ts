import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './home/product/product.component';
import { CartComponent } from './home/cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path:"" , redirectTo:"home", pathMatch:"full"},
  {path: "login", component: LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "products", component: ProductComponent},
  {path: "cart", component: CartComponent},
  {path: "profile", component: ProfileComponent},
  {path: "checkout", component: CheckoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
