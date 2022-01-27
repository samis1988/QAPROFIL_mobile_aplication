import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserserviceProvider, User } from '../../providers/userservice/userservice';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';



@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
   /**
    * @name form
    * @type {FormGroup} 
    * @public
    * @description     
    */
   exampleForm: FormGroup;
   email: string = '';
   password: string = '';
   phone: string = '';
   name: string = '';
   account: { name: string, email: string, phone: number, password: string };
   info: User;
   STORAGE_VALUE: string = '';
   id: string;
   user: User;
   page: string;
   private baseURL: string;
   // Initialise module classes
   constructor(public navCtrl: NavController,
      public http: HttpClient,
      public NP: NavParams,
      public fb: FormBuilder,
      public alertCtrl: AlertController,
      public toastController: ToastController,
      public userservice: UserserviceProvider,
      private storage: Storage,
      public loadingCtrl: LoadingController
      ) {

      // Create form builder validation rules
      this.exampleForm = fb.group({
         "name": new FormControl('', [Validators.required]),
         'email': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
         "phone": new FormControl('', [Validators.required,]),
      });
      this.baseURL = this.userservice.baseURL;
      this.page=this.NP.get('p');
      console.log(this.page);
      this.getValue();
   }




   /**
    * Triggered when template view is about to be entered
    * Determine whether we adding or editing a record
    * based on any supplied navigation parameters
    *
    * @public
    * @method ionViewWillEnter 
    * @return {None}
    */
   ionViewWillEnter(): void {
      this.setValue();
   }
   update() {
      console.log("Validate successfully");
      console.log(this.exampleForm.value['email']);
      let credential = { id: this.user.id, name: this.exampleForm.value['name'], email: this.exampleForm.value['email'], phone: this.exampleForm.value['phone']};
      this.http.post(`${this.baseURL}/user/update`, credential, { observe: 'response' }).subscribe(data => { 
        if (data.status == 200)
         this.sendNotification('user information updated successfully');
         this.goback();
      }, (error) => {
         this.sendNotification(error.error);
      });


   }
   sendNotification(message: string): void {
      let notification = this.toastController.create({
         message: message,
         cssClass:"custom-class",
         duration: 3000,
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
      this.navCtrl.pop();
      console.log('Click on button Test Console Log');
   }   
   setValue() {
   let loading = this.loadingCtrl.create({
         content: 'Please wait...'
       });
   loading.present();
    let request = `${this.baseURL}/user/info`;
    this.http.post(request,{id: this.page}, { observe: 'response' }).subscribe(data => {
      let info:any;
      if (data.status == 200)
         loading.dismiss();
         info= data.body;
         this.user = info;
         console.log(this.user);
         this.exampleForm.controls.name.setValue(this.user.name);
         this.exampleForm.controls.email.setValue(this.user.email);
         this.exampleForm.controls.phone.setValue(this.user.phone);
    }, (error) => {
      loading.dismiss();
      console.log(error);
    });
  }
}
