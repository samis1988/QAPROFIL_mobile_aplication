import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform , IonicModule} from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

export interface Slide {
  title: string;
  description: string;
  image: string;
  isend:boolean;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';

  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public platform: Platform) {
    this.dir = platform.dir();
    translate.get(["TUTORIAL_SLIDE1_TITLE",
      "TUTORIAL_SLIDE1_DESCRIPTION",
      "TUTORIAL_SLIDE2_TITLE",
      "TUTORIAL_SLIDE2_DESCRIPTION",
      "TUTORIAL_SLIDE3_TITLE",
      "TUTORIAL_SLIDE3_DESCRIPTION",
    ]).subscribe(
      (values) => {
        console.log('Loaded values', values);
        this.slides = [
          {
            isend:false,
            title: 'Welcome To Qaprofil',
            description: '',
            image: 'assets/img/1.jpg',
          },
          {
            isend:false,
            title: 'Slittng Line',
            description: '',
            image: 'assets/img/2.jpg',
          }
          ,
          { 
            isend:false,
            title: 'Gypsum Ceilings & Partions Systems',
            description: '',
            image: 'assets/img/3.jpg',
          }
          ,
          {
            isend:false,
            title: 'Indoor Aluminum False Ceilings',
            description: '',
            image: 'assets/img/4.jpg',
          }
          ,
          {
            isend:false,
            title: 'Light Gauge Steel Building',
            description: '',
            image: 'assets/img/5.jpg',
          },
          {
            isend:true,
            title: 'Rouf Panels sheet and Accessories',
            description: '',
            image: 'assets/img/6.jpg',
          }
          
        ];
      });
  }

  startApp() {
    this.navCtrl.setRoot('TabsPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
