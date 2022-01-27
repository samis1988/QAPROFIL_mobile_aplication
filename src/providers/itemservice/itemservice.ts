import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prop } from '../propservice/propservice';

/*
  Generated class for the ItemserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export interface Product {
  product: string;
  color: string;
  width: string;
  thickness: string;
  image: string;
  quantity: number;
  id: number;
  id_user: number;
  total: number;
  isValide: number;
  products: Prop[];
}
@Injectable()
export class ItemserviceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ItemserviceProvider Provider');
  }

}
