import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { SearchRoutes } from './search.routing';
import { RouterModule } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import { NavarComponent } from '../navar/navar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SearchComponent,NavarComponent],
  imports: [
    RouterModule.forChild(SearchRoutes),
    ButtonModule,
    FormsModule,

  ]
})
export class SearchModule { }
