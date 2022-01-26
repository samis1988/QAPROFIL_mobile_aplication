import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MainPage } from '../';
import { UserserviceProvider, User } from '../../providers/userservice/userservice';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  exampleForm: FormGroup;
  email: string = '';
  password: string = '';
  account: { email: string, password: string } = {
    email: '',
    password: ''
  };
  baseURL:string;
  id:string;
  info: User;
  page: string;
  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public navParams: NavParams, 
    public http: HttpClient,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public toastController: ToastController,
    public userservice: UserserviceProvider,
    private storage: Storage
    ) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
    this.baseURL= this.userservice.baseURL;
    this.exampleForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      'password': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+$'), Validators.minLength(4)]),
    })
    /*this.page= this.navParams.get('p');
    console.log(this.page);*/
  }

  doSignup() {
    
    console.log("Validate successfully");
    console.log(this.exampleForm);
    this.sigin();
  }
  sigin() {
    let request = `${this.baseURL}/user/login`;
    let credential = {email: this.exampleForm.value['email'], password: this.exampleForm.value['password'] };
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post(request, credential, { observe: 'response' }).subscribe(data => {
       let user: any
       if (data.status == 200)
       user = data.body;
       this.info = user;
       this.saveValue(this.info);
       this.getValue();
       this.goback();
    }, (error) => {
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
 observe(arg0: string, credential: { name: any; email: any; phone: any; password: any; }, arg2: { headers: HttpHeaders; }, observe: any, arg4: string) {
    throw new Error('Function not implemented.');


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
    this.navCtrl.pop();
    console.log('Click on button Test Console Log');
 }   
}
