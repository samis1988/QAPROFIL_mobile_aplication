import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController} from 'ionic-angular';
import { ViewChild } from '@angular/core';
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
  selector: 'page-qapstrips',
  templateUrl: 'qapstrips.html',
})
export class QapstripsPage {
 @ViewChild('mySlider') mySlider: any;
_imageViewerCtrl: ImageViewerController;
  colors: any[] = [];
  widths: any[] = [];
  thinkness: any[] = [];
  color: any;
  width: any;
  thicknes: any;
  quantity: number;
  baseURL: string;
  res: any;
  product1 = false;
  product2 = false;
  title = "Qap 50 Strip - Panel";
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
  
  elenco =  [
             {
               "img": "assets/img/qaprofil/qap50/1.png",
               "posicao": "Qap 50 Strips",
               "nome": "QAQ50"
               
             },
             {
               "img": "assets/img/qaprofil/qap50/2.png",
                 "posicao": "Qap 50 Strips",
               "nome": "QAQ50"
               
             },
             {
               "img": "assets/img/qaprofil/full_image/qap50-1.jpg",
               "posicao": "Qap 50 Strips",
               "nome": "QAQ50"
             } 
             
           ]
           
           
           slideNext(){
       this.mySlider.slideNext();
     }
 
     slidePrev(){
       this.mySlider.slidePrev();
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
              image: "assets/img/qaprofil/qap50/1.png",
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
