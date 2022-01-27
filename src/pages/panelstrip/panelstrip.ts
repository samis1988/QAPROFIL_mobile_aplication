import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the PanelstripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-panelstrip',
  templateUrl: 'panelstrip.html',
})
export class PanelstripPage {
  @ViewChild('mySlider') mySlider: any;
  _imageViewerCtrl: ImageViewerController;
  constructor(public navCtrl: NavController, public navParams: NavParams, imageViewerCtrl: ImageViewerController, public platform: Platform, public toastController: ToastController) {
    this._imageViewerCtrl = imageViewerCtrl;

    let backAction = platform.registerBackButtonAction(() => {
      console.log("contact");
      this.navCtrl.pop();
      backAction();
    }, 2)

  }

  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
  }

  elenco = [
    {
      "img": "assets/img/qaprofil/84r/1.png",
      "posicao": "84R and Joints Strips ",
      "nome": "QA8 / QAJ"

    },
    {
      "img": "assets/img/qaprofil/84r/2.png",
      "posicao": "84R and Joints Strips ",
      "nome": "QA8 / QAJ"

    },
    {
      "img": "assets/img/qaprofil/84r/3.png",
      "posicao": "84R and Joints Strips ",
      "nome": "QA8 / QAJ"

    },

    {
      "img": "assets/img/qaprofil/full_image/84r-1.png",
      "posicao": "84R and Joints Strips ",
      "nome": "QA8 / QAJ"
    }

  ]
  colors = [
    {
      "code": "MNTDBMB",
      "name": "Matt Natural Dry Bamboo"
    },
    {
      "code": "MGNBMB",
      "name": "Matt Green Bamboo"
    },
    {
      "code": "MNTDSTR",
      "name": "Matt Natural Dry Straw"
    },
    {
      "code": "MGNSTR",
      "name": "Matt Green Straw"
    },
    {
      "code": "DT",
      "name": "Dark Turquoise"
    },
    {
      "code": "GT",
      "name": "Golden Texture"
    },
    {
      "code": "LG",
      "name": "Light Green"
    },
    {
      "code": "LT",
      "name": "Light Turquoise"
    },
    {
      "code": "MDBN",
      "name": "Matt Dark Brown"
    },
    {
      "code": "MDWD",
      "name": "Matt Dark Wood"
    },
    {
      "code": "MLB",
      "name": "Matt Light Beige"
    },
    {
      "code": "MOW",
      "name": "Matt Off White"
    },
    {
      "code": "MRWD",
      "name": "Matt Red Wood (Mahogany) "
    },
    {
      "code": "MWWD",
      "name": "Matt White Wood"
    },
    {
      "code": "MYWD",
      "name": "Matt Yellow Wood"
    },
    {
      "code": "SB",
      "name": "Shiny Beige"
    },
    {
      "code": "SBK",
      "name": "Shiny Black"
    },
    {
      "code": "SBZ",
      "name": "Shiny Bronze"
    },
    {
      "code": "SC",
      "name": "Shiny Chrome"
    },
    {
      "code": "SDP",
      "name": "Shiny Dark Pink"
    },
    {
      "code": "SHG",
      "name": "Shiny Herbal Green"
    },
    {
      "code": "SLA",
      "name": "Shiny Light Apricot"
    },
    {
      "code": "SLG",
      "name": "Shiny Light Grey"
    },
    {
      "code": "SOW",
      "name": "Shiny Off White"
    },
    {
      "code": "SP ",
      "name": "Shiny Pink"
    },
    {
      "code": "SSBL",
      "name": "Shiny Sky Blue"
    },
    {
      "code": "ST",
      "name": "Silver Texture"
    },
    {
      "code": "MB",
      "name": "Matt Beige"
    },
    {
      "code": "MRBL",
      "name": "Matt Regular Blue"
    },
    {
      "code": "MW",
      "name": " Matt White"
    },
    {
      "code": "SW",
      "name": "Shiny white"
    },
    {
      "code": "SG",
      "name": "Shiny Gold"
    },
    {
      "code": "SL",
      "name": "Shiny Lead"
    }
  ];
  widths = [
    {
      "value": 0.98
    },
    {
      "value": 1.22
    },
    {
      "value": 1.46
    },
    {
      "value": 0.51
    },
    {
      "value": 0.64
    },
    {
      "value": 0.77
    },
    {
      "value": 0.38
    },
    {
      "value": 0.24
    },
    {
      "value": 0.13
    },
    {
      "value": 0.48
    },
    {
      "value": 0.59
    },
    {
      "value": 0.71
    },
    {
      "value": 0.73
    },
    {
      "value": 1.47
    }
  ];

  slideNext() {
    this.mySlider.slideNext();
  }

  slidePrev() {
    this.mySlider.slidePrev();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PanelstripPage');
  }
  async presentToast() {
    let msg="item added successfully to the cart";
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }
}
