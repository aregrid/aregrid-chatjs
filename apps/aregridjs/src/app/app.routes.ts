import { Route } from '@angular/router';
import { ChatComponent } from './chat/chat.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: ChatComponent,
    title: 'IM',
  },
];
