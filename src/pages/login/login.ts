import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserserviceProvider, User } from '../../providers/userservice/userservice';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  exampleForm: FormGroup;
  email: string = '';
  password: string = '';
  baseURL:string;
  id:string;
  info: User;
  page: string;

  constructor(public navCtrl: NavController,
    public http: HttpClient,
    public NP: NavParams,
    public fb: FormBuilder,
    public alertCtrl: AlertController,
    public toastController: ToastController,
    public userservice: UserserviceProvider,
    private storage: Storage,
    public loadingCtrl: LoadingController) {

    // Create form builder validation rules
    this.exampleForm = fb.group({
       'email': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
       'password': new FormControl('', [Validators.required]),
    });
    //this.storage.clear();
    this.baseURL= this.userservice.baseURL;
    this.page=this.NP.get('p');
    console.log(this.page);
 }

  doSignup() {
    
    console.log("Validate successfully");
    console.log(this.exampleForm);
    this.sigin();
  }
  sigin() {
    let request = `${this.baseURL}/user/login`;
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    let credential = {email: this.exampleForm.value['email'], password: this.exampleForm.value['password'] };
    this.http.post(request, credential, { observe: 'response' }).subscribe(data => {
       let user: any
       if (data.status == 200)
       loading.dismiss();
       user = data.body;
       this.info = user;
       this.saveValue(this.info);
       this.getValue();
       this.goback();
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




 saveValue(user: User) {

    console.log(user);
    

    if (user) {

       this.storage.set('ID', user.id);
       this.storage.set('NAME', user.name);

    }

 }
 getValue() {
    this.storage.get('ID').then((result) => {
       this.id=result;
       console.log('id',this.id);
    });
 }
 showAlert(msg: string, title: string)
 {
    let alert = this.alertCtrl.create({
     title: title,
     subTitle:(msg),
     buttons: ['OK']
     });
    
     alert.present();
     
 }
 goback() {
   if(this.page != null || this.page != undefined || this.page !='')
   {this.navCtrl.push(this.page);} 
   else 
   {
     //profile
     this.navCtrl.push('CartPage');
    } 
 } 
 register() {
  if(this.page != null || this.page != undefined || this.page !=''){
  this.navCtrl.push('RegisterPage',{
    p: this.page,
  }); 
  } 
  else 
  this.navCtrl.push('RegisterPage');
  } 
  forget(){
  this.navCtrl.push('ResetpwdPage',{
   p: 'LoginPage',
   });
   } 
}
