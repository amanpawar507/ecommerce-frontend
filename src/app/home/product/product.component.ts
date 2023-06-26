import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productList: any;

  constructor(private api: ApiService, private cartService: CartService){}

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;

      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity: 1, total: a.itemPrice})
      });
    })

    console.log(this.productList);
  }

  addToCart(item: any){
    console.log("inside func addtoCart component")
    this.cartService.addToCart(item);
  }

}
