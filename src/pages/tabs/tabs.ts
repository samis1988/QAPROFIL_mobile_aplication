import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, ListHeader, NavController } from 'ionic-angular';

import { Tab1Root, Tab2Root } from '../';
import { AccountPage } from '../account/account';
import { ListMasterPage } from '../list-master/list-master';
import { SearchPage } from '../search/search';
import { WelcomePage } from '../welcome/welcome';

@IonicPage(
  {
    name: 'TabsPage'
  }
)
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = ListMasterPage;
  tab2Root: any = SearchPage;
  tab3Root: any = AccountPage;
  tab4Root: any = WelcomePage;

  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";
  tab4Title = " ";

  constructor(public navCtrl: NavController, public translateService: TranslateService) {
    translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE', 'TAB4_TITLE']).subscribe(values => {
      this.tab1Title = values['TAB1_TITLE'];
      this.tab2Title = values['TAB2_TITLE'];
      this.tab3Title = "Account";
      this.tab4Title = "Home";
    });
  }
}
