import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MadridPage } from './madrid';

@NgModule({
  declarations: [
    MadridPage,
  ],
  imports: [
    IonicPageModule.forChild(MadridPage),
  ],
})
export class MadridPageModule {}
