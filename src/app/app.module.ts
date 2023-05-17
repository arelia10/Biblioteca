import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { SearchadvancedComponent } from './components/searchadvanced/searchadvanced.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { NavarComponent } from './components/navar/navar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { SliderModule } from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { CustomerServi } from './service/customerservi.ts.service';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { OptionComponent } from './components/option/option.component';
import {ButtonModule} from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';

import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import { AppLayoutModule } from './layout/app.layout.module';

import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';





@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchadvancedComponent,
    DocumentsComponent,
    NavarComponent,
    FooterComponent,
    OptionComponent,



],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FileUploadModule,
    InputTextareaModule,
    InputTextareaModule,
    ToolbarModule,
    BrowserAnimationsModule,
    CardModule,
    ReactiveFormsModule,
    FormsModule,
    TagModule,
    TableModule,
    SliderModule,
    DropdownModule,
    MultiSelectModule,
    InputTextModule,
    MenuModule,
    MenubarModule,
    TieredMenuModule,
    ButtonModule,
    TagModule,
    PaginatorModule,
    RadioButtonModule,
    SidebarModule,
    AppLayoutModule





  ],
  providers: [   CustomerServi,{provide: LocationStrategy,useClass: HashLocationStrategy},CountryService, CustomerService, EventService, IconService, NodeService,
    PhotoService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
