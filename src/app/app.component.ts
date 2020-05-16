import { Component } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'mdb Angular Project Chatbot 😎';
  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }
}
