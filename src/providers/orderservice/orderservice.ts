import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the OrderserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export interface Cart {
  product: string;
  color: string;
  width: string;
  thickness: string;
  image: string;
  quantity: number;
}
@Injectable()
export class OrderserviceProvider {
  order: Cart[] = [];
  constructor(public http: HttpClient) {
    console.log('Hello OrderserviceProvider Provider');
  }
  setOrder(cart:Cart) {
    let res = this.order.find((p) => p.product == cart.product);
    if(res==null)
    this.order.push(cart);
    console.log(this.order);
  }
  getOrder(){
    console.log(this.order);
    return this.order;
  }
  clearOrder(){
  this.order.splice(0,this.order.length) ;}

}
