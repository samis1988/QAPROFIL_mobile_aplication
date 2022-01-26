import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserserviceProvider, User } from '../../providers/userservice/userservice';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ThrowStmt } from '@angular/compiler';


/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  exampleForm: FormGroup;
  sginForm: FormGroup;
  email: string = '';
  password: string = '';
  baseURL:string;
  id:any;
  name:any;
  info: User;
  isConnect=false;
  isRegister=false;
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
    this.sginForm= fb.group({
      'email': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      'password': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+$'), Validators.minLength(4)]),
    });
    this.exampleForm = fb.group({
      "name": new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      "phone": new FormControl('', [Validators.required,]),
      'password': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+$'), Validators.minLength(4)]),
    });
    //this.storage.clear();
    this.getValue();
    this.baseURL= this.userservice.baseURL;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }
  goToPage(page) {
    if(page ==='logout')
    {
      this.storage.clear();
      this.navCtrl.setRoot('TabsPage');
    }
    else if(page=="LoginPage")
    {this.navCtrl.setRoot(page);}
    else
    {this.navCtrl.push(page,{
      p: this.id,
    }); }
  }
  navigateTo(page){
    if(page=='RegisterPage')
      {
  
        this.isRegister=true;
        //this.navCtrl.setRoot(this.navCtrl.getActive().component);
        
      } 
      else{
      this.navCtrl.push(page); }
  }
  alreday(){
    this.isRegister=false;
  }
  getValue() {
    this.storage.get('ID').then((result) => {
      this.id = result;
      console.log('id', this.id);
      if (this.id == null)
      {this.id = 0;
        this.isConnect = false; }
      else 
      { this.isConnect= true;}
    });
    this.storage.get('NAME').then((result) => {
      this.name = result;
      console.log('name', this.name);
    });
  }
   

  doSignup() {
    this.login();
  }
  login() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    let request = `${this.baseURL}/user/login`;
    let credential = {email: this.sginForm.value['email'], password: this.sginForm.value['password'] };
    this.http.post(request, credential, { observe: 'response' }).subscribe(data => {
       let user: any
       if (data.status == 200)
       loading.dismiss();
       user = data.body;
       this.info = user;
       this.name= user.name;
       this.saveValue(this.info);
       this.getValue();
       this.goback();
    }, (error) => {
       loading.dismiss();
       this.sendNotification("please check your credential");
    });
  }
  sigin() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    let credential = { name: this.exampleForm.value['name'], email: this.exampleForm.value['email'], phone: this.exampleForm.value['phone'], password: this.exampleForm.value['password'] };
    this.http.post(`${this.baseURL}/user/create`, credential, { observe: 'response' }).subscribe(data => {
       let user: any
       if (data.status == 200)
       loading.dismiss();
       user = data.body;
       this.info = user;
       this.name= user.name;
       this.userservice.setUser(this.info);
       this.saveValue(this.info);
       this.getValue();
       this.sendNotification('user create successfully');
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
goback() {
  
  this.isConnect= true;
  this.navCtrl.setRoot(this.navCtrl.getActive().component);
  
} 
}
