import { Route } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
export const appRoutes: Route[] = [
  {
    path: '',
    component: ChatComponent,
    title: 'Channels | Aregrid',
  },
  // {
  //   path: 'note-ai',
  //   component: NoteAiComponent,
  //   title: 'Note AI | Aregrid',
  // },
];
