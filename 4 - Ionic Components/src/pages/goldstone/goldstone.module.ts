import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoldstonePage } from './goldstone';

@NgModule({
  declarations: [
    GoldstonePage,
  ],
  imports: [
    IonicPageModule.forChild(GoldstonePage),
  ],
})
export class GoldstonePageModule {}
