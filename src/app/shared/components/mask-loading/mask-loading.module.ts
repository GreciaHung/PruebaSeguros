import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskLoadingComponent } from './mask-loading/mask-loading.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    FlexLayoutModule
  ],
  declarations: [MaskLoadingComponent],
  exports:[MaskLoadingComponent]
})
export class MaskLoadingModule { }
