import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform  } from 'ionic-angular';


import { Item } from '../../models/item';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];

   


  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform, public items: Items) {
  
    platform.registerBackButtonAction(() => {
      console.log("backPressed 1");
    },1);
  
  
  
  let backAction =  platform.registerBackButtonAction(() => {
        console.log("gypsum");
        this.navCtrl.pop();
        backAction();
      },2)
  
  }

  goToSecond(page){
    this.navCtrl.push(page);
   
  }


  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.items.query({
      name: val
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
  
   startApp(page) {
    this.navCtrl.setRoot(page, {}, {
      animate: true,
      direction: 'forward'
    });
  
}

}
