import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgwWowModule } from 'ngx-wow';


import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular Google Maps
import { AgmCoreModule } from '@agm/core';
//Modules
// import { PagesModule } from './pages/pages.module';
import { HomeComponent } from './home/home.component';
import { PreviewComponent } from './preview/preview.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreviewComponent,
    ChatbotComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgwWowModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    // AppRoutingModule,
    // PagesModule,
    // RouterModule,
    //  NgbModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
