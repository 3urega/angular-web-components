import { SharedMaterialModule } from '../../shared-material.module';
import { CommonModule } from '@angular/common';
import { BgimageComponent } from './bgimage.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  declarations: [BgimageComponent],
  exports: [BgimageComponent]
})
export class BgImageModule { }
