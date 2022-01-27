import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Platform, App } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';

import { DocumentViewer, DocumentViewerOptions} from '@ionic-native/document-viewer';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { FileOpener } from '@ionic-native/file-opener';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
 
 
 
 
 
 
 

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController, public platform: Platform, public app: App,
  private document: DocumentViewer,
    private file: File,
    private fileOpener: FileOpener,
    private inAppBrowser: InAppBrowser,
    private transfer: FileTransfer) {
    this.currentItems = this.items.query();
    
    
  platform.registerBackButtonAction(() => {
      console.log("backPressed 1");
    },1);
  
  
  
  let backAction =  platform.registerBackButtonAction(() => {
        console.log("list-master");
        this.navCtrl.pop();
        backAction();
      },2)
    
    
  }
  
    pages: any[] = [
    { title: 'Gypsum Ceilings', component: 'GypsumPage',image: 'assets/img/qaprofil/new_gypsum.jpg' },
    { title: 'Indoor Aluminum', component: 'IndooralumPage',image: 'assets/img/qaprofil/aluminum.jpg' },
    { title: 'Light Gauge Steel', component: 'LightgaugesteelPage' ,image: 'assets/img/qaprofil/cabins.jpg'},
    { title: 'Roof Panels', component: 'RoofpanelsPage',image: 'assets/img/qaprofil/roof.jpg' },
    { title: 'Slitting Line', component: 'SlittingPage',image: 'assets/img/qaprofil/new_slitting.jpg' },
    { title: 'Buildings Accessories', component: 'LintelPage',image: 'assets/img/qaprofil/lintel.jpg' },
    { title: 'Youtube Video', component: 'VedioqaprofilPage',image: 'assets/events/ev3.png'},
    {title: 'Catalogue pdf', component: 'cataloge',image: 'assets/img/pdf.jpg'}
     
  ]

  goToSecond(page){
    if(page=="cataloge")
    this.openExternalUrl('https://www.qaprofil.com.qa/full_catalogue/mobile/index.html');
    else
    this.navCtrl.push(page);
  }
    
    
    
    openLocalPdf() {
   let filePath = this.file.applicationDirectory + 'www/assets';

    if (this.platform.is('android')) {


      let fakeName = Date.now();


      this.file.copyFile(filePath, '5-tools.pdf', this.file.dataDirectory, '${fakeName}.pdf').then(result => {


        this.fileOpener.open(result.nativeURL, 'application/pdf')


          .then(() => console.log('File is opened'))


          .catch(e => console.log('Error opening file', e));


      })


    } else {


      // Use Document viewer for iOS for a better UI


      const options: DocumentViewerOptions = {


        title: 'My PDF'


      }


      this.document.viewDocument('${filePath}/5–tools.pdf', 'application/pdf', options);


    }


  }

  downloadAndOpenPdf() {
    
    let path =null;
    if(this.platform.is('ios'))
    {
    path = this.file.documentsDirectory;
    
    } else
    {
    path=this.file.dataDirectory;
    }

    const transfer = this.transfer.create();

    transfer.download('https://qaprofil.com.qa/file/fullcatalog.pdf', path + 'myfile.pdf')
      .then(entry => {
        let url = entry.toURL();
         
        
        this.document.viewDocument(url, 'application/pdf', {});
      });
  }

 startApp(page) {
    this.navCtrl.setRoot(page, {}, {
      animate: true,
      direction: 'forward'
    });
  
  }
  openExternalUrl(url: string) {
    this.inAppBrowser.create(
      url,
      '_blank'
    );
  }

}
