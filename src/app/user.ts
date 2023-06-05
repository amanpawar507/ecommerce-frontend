export class User {
    username!: string;
    password!: string;
    email!: string;
    id!: number;
    mobile!: string;
    firstName!: string;
    lastName!: string;
    gender!: string;
    cart!: Cart;
    creditCards!: string;
    addresses!: string;
  
}


export class Cart {
    cartId: number;
    totalPrice: number;
    orderItemList: OrderItem[];
  
    constructor(cartId: number, totalPrice: number, orderItemList: OrderItem[]) {
      this.cartId = cartId;
      this.totalPrice = totalPrice;
      this.orderItemList = orderItemList;
    }
  }

export class OrderItem{
        id!: number;
        itemCategory!: string;
        itemDescription!: string;
        itemImageUrl!: string;
        itemName!: string;
        itemPrice!: number;
        itemQuantity!: number;
        storeId!: number;
}

