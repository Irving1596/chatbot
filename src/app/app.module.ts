import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { AppRoutingModule } from './app-routing.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
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
    AppRoutingModule,
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
