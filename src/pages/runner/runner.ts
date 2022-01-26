import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController} from 'ionic-angular';
import { UserserviceProvider, User } from '../../providers/userservice/userservice';
import { OrderserviceProvider, Cart } from '../../providers/orderservice/orderservice';
import { ImageViewerController } from 'ionic-img-viewer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/**
 * Generated class for the QapstripsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


 @IonicPage()
 @Component({
   selector: 'page-runner',
   templateUrl: 'runner.html',
 })
 export class RunnerPage {

 
_imageViewerCtrl: ImageViewerController;
  colors: any[] = [];
  widths: any[] = [];
  thinkness: any[] = [];
  color: any;
  width: any;
  thicknes: any;
  baseURL: string;
  quantity: number;
  res: any;
  product1 = false;
  product2 = false;
  isValid = false;
  title = "Runner";
  p1 = "";
  p2 = "";
  cart: Cart;
  orders: Cart[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, imageViewerCtrl: ImageViewerController, public platform: Platform, public userservice: UserserviceProvider, public orderservice: OrderserviceProvider, public http: HttpClient, public toastController: ToastController) {
    this.baseURL = this.userservice.baseURL;
    this._imageViewerCtrl = imageViewerCtrl;
    this.quantity=1;
    let backAction =  platform.registerBackButtonAction(() => {
        console.log("contact");
        this.navCtrl.pop();
        backAction();
      },2)
  
  }
  
   presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
  }
  
  ionViewDidLoad() {
    let request = `${this.baseURL}/product/${this.title}`;
    console.log(request);
    this.http.get(`${this.baseURL}/product/${this.title}`, { observe: 'response' }).subscribe(data => {

      if (data.status == 200)
      this.res = data.body;
      console.log(this.res);
      this.colors = this.res.colors;
      this.widths = this.res.widths;
      this.thinkness = this.res.thinkness;
      if(this.colors.length != 0){
         this.isValid = true;}

    }, (error) => {
      console.log(error);
    });
  }

  goToSecond(page) {
    this.navCtrl.push(page);
  }

  
  addToCart() {
      if (this.color == null || this.width == null || this.thicknes == null || this.quantity== null || this.quantity < 0) {
        this.sendNotification("Please choose the characteristics of the product");
      }
      else {
            let data: Cart = {
              product: this.title,
              color: this.color,
              width: this.width,
              thickness: this.thicknes,
              image:"assets/img/qaprofil/runner.png",
              quantity: this.quantity,
            };
            this.orderservice.setOrder(data);
       
        this.sendNotification('Product added to the cart');
      }
  

  }

  sendNotification(message: string): void {
    let notification = this.toastController.create({
      message: message,
      duration: 3000
    });
    notification.present();
  }

  

}

