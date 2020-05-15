import { Routes, RouterModule } from '@angular/router';
import {ChatbotComponent} from './pages/chatbot/chatbot.component';
import { PreviewComponent } from './pages/preview/preview.component';

const routes: Routes = [
    { path: 'chatbot', component: ChatbotComponent },
    {path: '' ,redirectTo: '/chatbot' , pathMatch: 'full' },
    { path: 'preview', component: PreviewComponent }
    //{path: '**', component: ChatbotComponent },
  
  ];

  export const APP_ROUTES = RouterModule.forRoot( routes, { useHash: true } );
