import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { PreviewComponent } from './preview/preview.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  //{ path: 'chatbot', component: ChatbotComponent },
  //{ path: 'preview', component: PreviewComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
