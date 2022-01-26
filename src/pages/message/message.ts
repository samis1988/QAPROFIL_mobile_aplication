import { Component } from '@angular/core';
  
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  AlertController} from 'ionic-angular';
/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

public name         : any;

  /**
    * @name form
    * @type {FormGroup} 
    * @public
    * @description     Define FormGroup property for managing form validation / data retrieval
    */
   public form                   : FormGroup;




   /**
    * @name requestName
    * @type {Any} 
    * @public
    * @description     Model for managing requestName field
    */
   public requestName         : any;




   /**
    * @name requestDescription
    * @type {Any} 
    * @public
    * @description     Model for managing requestDescription field
    */
   public requestDescription  : any;


 /**
    * @name requestEmail
    * @type {Any} 
    * @public
    * @email     Model for managing requestEmail field
    */
   public requestEmail  : any;

/**
    * @name requestMobile
    * @type {Any} 
    * @public
    * @mobile     Model for managing requestMobile field
    */
   public requestSubject  : any;



   /**
    * @name isEdited
    * @type {Boolean} 
    * @public
    * @description     Flag to be used for checking whether we are adding/editing an entry
    */
   public isEdited               : boolean = false;

 public isInserted               : boolean = false;


   /**
    * @name hideForm
    * @type {Boolean} 
    * @public
    * @description     Flag to hide the form upon successful completion of remote operation
    */
   public hideForm               : boolean = false;




   /**
    * @name pageTitle
    * @type {String} 
    * @public
    * @description     Property to help set the page title
    */
   public pageTitle              : string;




   /**
    * @name recordID
    * @type {String} 
    * @public
    * @description     Property to store the recordID for when an existing entry is being edited
    */
   public recordID               : any      = null;




   /**
    * @name baseURI
    * @type {String} 
    * @public
    * @description     Remote URI for retrieving data from and sending data to
    */
   private baseURI               : string  = "https://qaprofil.com.qa/ionic/";



    
   // Initialise module classes
   constructor(public navCtrl    : NavController,
               public http       : HttpClient,
               public NP         : NavParams,
               public fb         : FormBuilder,
               public alertCtrl: AlertController,
               public toastCtrl  : ToastController) 
   {

      // Create form builder validation rules
      this.form = fb.group({
         
         "subject"           : ["", Validators.required],
         "description"           : ["", Validators.required]
      });
      
      this.name =this.NP.get('name');
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
   ionViewWillEnter() : void
   {
      this.resetFields();

      if(this.NP.get("record"))
      {
         this.isEdited      = true;
         this.isInserted =false;
         this.selectEntry(this.NP.get("record"));
         this.pageTitle     = 'Amend entry';
      }
      else
      {
         this.isEdited      = false;
          this.isInserted =true;
         this.pageTitle     = 'Create entry';
      }
   }

            logout() : void
   {
      this.navCtrl.push('WelcomePage');
   }  

   
   /**
    * Assign the navigation retrieved data to properties
    * used as models on the page's HTML form
    *
    * @public
    * @method selectEntry
    * @param item 		{any} 			Navigation data
    * @return {None}
    */
   selectEntry(item : any) : void
   {
       
      this.requestDescription = item.description;
       this.requestSubject = item.subject;
      this.recordID              = item.id;
   }



  sigin( description : string, subject : string) : void
   {
    
      let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
          options 	: any		= { "key" : "create",  "name" : this.name,  "description" : description,  "subject" : subject },
          url       : any      	= this.baseURI + "message_user.php";
  
      this.http.post(url, JSON.stringify(options), headers)
      
      .subscribe((i : any) => 
      {
      



         console.dir(i);
         
         if(i=="Registration successfull"){
       
          
    let alert = this.alertCtrl.create({
      title:'CONGRATS'   ,
      subTitle:("Your Login success"),
      buttons: ['OK']
      });
   
      alert.present();
      this.navCtrl.push('LoginPage',{name : this.name});
      
       

  }
         
  else
  {
  let alert = this.alertCtrl.create({
      title:"Error",
      subTitle:(i),
      buttons: ['OK']
      });
     
      alert.present();
      
  }
         
         
         
         
      },
      (error : any) =>
      {
         console.dir(error);
      });
   
   }


 resetFields() : void
   {
      
      this.requestDescription    = ""; 
   }

   /**
    * Manage notifying the user of the outcome of remote operations  
    *
    * @public
    * @method sendNotification
    * @param message 	{String} 			Message to be displayed in the notification
    * @return {None}
    */
   sendNotification(message : string)  : void
   {
      let notification = this.toastCtrl.create({
          message       : message,
          duration      : 3000
      });
      notification.present();
   }


}
