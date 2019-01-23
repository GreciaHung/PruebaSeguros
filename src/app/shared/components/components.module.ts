import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CardComponent, SearchComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatTooltipModule
  ],
  exports: [CardComponent, SearchComponent]
})
export class ComponentsModule { }
