import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PropserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export interface Prop {
  product: string;
  color: string;
  width: string;
  thickness: string;
}
@Injectable()
export class PropserviceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PropserviceProvider Provider');
  }

}
