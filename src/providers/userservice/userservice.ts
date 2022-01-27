import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export interface User {
  id:number;
  name: string;
  email: string;
  phone: string;
}
@Injectable()
export class UserserviceProvider {
  user: User;
  baseURL:string = "https://erp.qaprofil.com.qa/api/v1";
  constructor(public http: HttpClient) {
    
  }
  setUser(info: User) {
    this.user = info;
    console.log(this.user);
  }
  getUser(){
    return this.user;
  }

}
