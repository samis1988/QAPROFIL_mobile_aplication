import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Tabs, LoadingController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserserviceProvider, User } from '../../providers/userservice/userservice';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ResetpwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resetpwd',
  templateUrl: 'resetpwd.html',
})
export class ResetpwdPage {
  exampleForm: FormGroup;
  checkForm: FormGroup;
  changeForm: FormGroup;
  email: string = '';
  password: string = '';
  phone: string = '';
  name: string = '';
  account: { name: string, email: string, phone: number, password: string };
  info: User;
  STORAGE_VALUE: string = '';
  id: string;
  page: string;
  tab:Tabs; 
  isCode =false;
  isCheck=false;
  baseURL: string;
  constructor(public navCtrl: NavController,
    public http: HttpClient,
    public NP: NavParams,
    public fb: FormBuilder,
    public alertCtrl: AlertController,
    public toastController: ToastController,
    public userservice: UserserviceProvider,
    public loadingCtrl: LoadingController) {

    // Create form builder validation rules
    this.exampleForm = fb.group({
       'email': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
    });
    this.checkForm = fb.group({
      'email': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      'code': new FormControl('', [Validators.required]),
   });
   this.changeForm = fb.group({
    'email': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
    'password': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+$'), Validators.minLength(4)]),
  });
  this.baseURL= this.userservice.baseURL;
   /* this.tab = this.navCtrl.parent;*/
    this.page=this.NP.get('p');
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetpwdPage');
  }

  doSend(){
   let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    let credential = { email: this.exampleForm.value['email']};
    this.email=credential.email;
    this.http.post(`${this.baseURL}/user/forgetpassword`, credential, { observe: 'response' }).subscribe(data => {
         let user: any
         if (data.status == 200)
         loading.dismiss();  
         user = data.body;
         this.info = user;
         this.userservice.setUser(this.info);
         this.sendNotification('please check your email to get the code');
         this.goback("1");
      }, (error) => {
         loading.dismiss();  
         this.sendNotification(error.error);
      });
  }
  sendNotification(message: string): void {
    let notification = this.toastController.create({
       message: message,
       duration: 3000
    });
    notification.present();
  }
  goback(a:string) {
  
    if(a=="1")
    {this.isCode= true;
    this.checkForm.controls.email.setValue(this.email);
    } 
    if(a=="2")
    {this.isCode= true;
    this.isCheck= true;
    this.changeForm.controls.email.setValue(this.email);
    console.log("true");
    //this.navCtrl.setRoot(this.navCtrl.getActive().component); 
    }
    if(a=="3")
    {  if(this.page =="LoginPage")
      this.navCtrl.setRoot('CartPage');
      else
       this.navCtrl.setRoot('TabsPage');}
  } 
  check(){
   let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    let credential = { email: this.checkForm.value['email'], code: this.checkForm.value['code']};
    this.email=credential.email;
    this.http.post(`${this.baseURL}/user/checkcode`, credential, { observe: 'response' }).subscribe(data => {
         if (data.status == 200)
         loading.dismiss();  
         this.sendNotification('please change your password');
         this.goback("2");
      }, (error) => {
         loading.dismiss();  
         this.sendNotification(error.error);
      });
  
  }
  changepwd(){
   let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    let credential = { email: this.changeForm.value['email'], password: this.changeForm.value['password']};
    this.email=credential.email;
    this.http.post(`${this.baseURL}/user/changepwd`, credential, { observe: 'response' }).subscribe(data => {
         let user: any
         if (data.status == 200)
         loading.dismiss();  
         user = data.body;
         this.info = user;
         this.userservice.setUser(this.info);
         this.sendNotification('password changed successfully');
         this.goback("3");
      }, (error) => {
         loading.dismiss();  
         this.sendNotification(error.error);
      });
  
  }
}
