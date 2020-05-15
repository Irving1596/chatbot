import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';


import{ChatbotComponent} from './chatbot/chatbot.component';
import { AppRoutingModule } from '../app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PagesComponent } from './pages.component';
import { PreviewComponent } from './preview/preview.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  imports: [        
    AppRoutingModule,
    CommonModule,
    NgbModule,
    MDBBootstrapModule.forRoot()
  ],
  exports: [
    PreviewComponent
],
  bootstrap: [AppComponent],
 schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    ChatbotComponent,
    PagesComponent,
    PreviewComponent 
  ]
})
export class PagesModule { }
