import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Tabs, LoadingController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserserviceProvider, User } from '../../providers/userservice/userservice';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';



@IonicPage()
@Component({
   selector: 'page-register',
   templateUrl: 'register.html',
})
export class RegisterPage {
   /**
    * @name form
    * @type {FormGroup} 
    * @public
    * @description     Define FormGroup property for managing form validation / data retrieval
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
   page: string;
   tab:Tabs; 
   baseURL:string;
   /**
    * @name requestName
    * @type {Any} 
    * @public
    * @description     Model for managing requestName field
    */
   public requestName: any;
   /**
    * @name requestDescription
    * @type {Any} 
    * @public
    * @description     Model for managing requestDescription field
    */
   public requestDescription: any;


   /**
      * @name requestEmail
      * @type {Any} 
      * @public
      * @email     Model for managing requestEmail field
      */
   public requestEmail: any;

   /**
       * @name requestMobile
       * @type {Any} 
       * @public
       * @mobile     Model for managing requestMobile field
       */
   public requestMobile: any;



   /**
    * @name isEdited
    * @type {Boolean} 
    * @public
    * @description     Flag to be used for checking whether we are adding/editing an entry
    */
   public isEdited: boolean = false;
   /**
    * @name hideForm
    * @type {Boolean} 
    * @public
    * @description     Flag to hide the form upon successful completion of remote operation
    */
   public hideForm: boolean = false;
   /**
    * @name pageTitle
    * @type {String} 
    * @public
    * @description     Property to help set the page title
    */
   public pageTitle: string;
   /**
    * @name recordID
    * @type {String} 
    * @public
    * @description     Property to store the recordID for when an existing entry is being edited
    */
   public recordID: any = null;

   // Initialise module classes
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
         "name": new FormControl('', [Validators.required]),
         'email': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
         "phone": new FormControl('', [Validators.required,]),
         'password': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+$'), Validators.minLength(4)]),
      });
      this.tab = this.navCtrl.parent;
      this.baseURL= this.userservice.baseURL;
      this.page=this.NP.get('p');
      console.log(this.page);
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
      this.getValue();


   }
   async presentLoading() {
      const loading = await this.loadingCtrl.create({
         content: 'Please wait...',
      });
      return await loading.present();
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

   resetFields(): void {
      this.requestName = "";
      this.requestEmail = "";
      this.requestMobile = "";
      this.requestDescription = "";
   }
   goToTab3 (){
      this.tab.select(4);
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
     this.navCtrl.pop();
     } 
   }   
   
}



