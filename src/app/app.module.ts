 import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { EmailComposer } from '@ionic-native/email-composer';

import { Items } from '../mocks/providers/items';
import { Settings, User, Api } from '../providers';
import { MyApp } from './app.component';

import { HardwareButtons } from '@scaffold-digital/ionic-hardware-buttons';
 
import { File } from "@ionic-native/file";
import { FileTransfer } from "@ionic-native/file-transfer";
import { DocumentViewer} from '@ionic-native/document-viewer';
import { FileOpener } from '@ionic-native/file-opener';
import { WelcomePage } from '../pages/welcome/welcome';
import { SearchPage } from '../pages/search/search';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { ListMasterPage } from '../pages/list-master/list-master';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePageModule } from '../pages/welcome/welcome.module';
import { SearchPageModule } from '../pages/search/search.module';
import { ListMasterPageModule } from '../pages/list-master/list-master.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { UserserviceProvider } from '../providers/userservice/userservice';
import { OrderserviceProvider } from '../providers/orderservice/orderservice';
import { AccountPageModule } from '../pages/account/account.module';
import { ItemserviceProvider } from '../providers/itemservice/itemservice';
import { PropserviceProvider } from '../providers/propservice/propservice';
import { TutorialPageModule } from '../pages/tutorial/tutorial.module';

  
 
 
 

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp,
    
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
     HttpClientModule,
     WelcomePageModule,
     SearchPageModule,
     ListMasterPageModule,
     TabsPageModule,
     TutorialPageModule,
     AccountPageModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TutorialPage,
  ],
  providers: [
    Api,
    Items,
    User,
    Camera,
    SplashScreen,
    HardwareButtons,
    CallNumber,
    InAppBrowser,
    StatusBar,
    EmailComposer,
    
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    File,
    FileTransfer,
    DocumentViewer,
    FileOpener,
    UserserviceProvider,
    OrderserviceProvider,
    ItemserviceProvider,
    PropserviceProvider
  ]
})
export class AppModule { }
