import { Component, ViewChild } from '@angular/core';

import { CaberraPage} from "../caberra/caberra";
import { GoldstonePage}  from "../goldstone/goldstone";
import { MadridPage } from '../madrid/madrid'
import { Tabs } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('tabs') tabRef: Tabs;
  
  tab1Root = MadridPage;
  tab2Root = GoldstonePage;
  tab3Root = CaberraPage;

  constructor() {

  }

  ionViewDidEnter() {
    //select Goldstone
    this.tabRef.select(1);
  }
}
