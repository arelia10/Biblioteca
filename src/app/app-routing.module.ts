import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { SearchadvancedComponent } from './components/searchadvanced/searchadvanced.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { NavarComponent } from './components/navar/navar.component';
import { FooterComponent } from './components/footer/footer.component';
import { OptionComponent } from './components/option/option.component';

import { AppLayoutComponent } from "./layout/app.layout.component";



const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'result', component:DocumentsComponent },
  { path: 'searchadvanced', component: SearchadvancedComponent},
  { path: 'option', component: OptionComponent},

  {path: '', component: AppLayoutComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
