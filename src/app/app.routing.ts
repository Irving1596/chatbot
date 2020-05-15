import { Routes, RouterModule } from '@angular/router';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { PreviewComponent } from './preview/preview.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'chatbot', component: ChatbotComponent },
  { path: 'preview', component: PreviewComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full', component: HomeComponent },
  { path: '**', component: HomeComponent },

];

export const APP_ROUTES = RouterModule.forRoot(routes
  // , { useHash: true }
);
