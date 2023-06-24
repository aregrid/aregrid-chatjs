import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBlocksuiteComponent } from '../message-blocksuite/message-blocksuite.component';
import { HeaderComponent } from './header/header.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
@Component({
  selector: 'aregrid-chat',
  standalone: true,
  imports: [
    CommonModule,
    MessageBlocksuiteComponent,
    HeaderComponent,
    ChatMessageComponent,
  ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  chatMessages = [
    {
      avatar:
        'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/005099b73f79ca48a6acf026c0021f93f323e9ba_full.jpg',
      userName: 'John Doe',
      content: 'Hello, how are you?',
    },
    {
      avatar:
        'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0077f8c11bd1f32199710a0259c9873ce8e7b63b_full.jpg',
      userName: 'Jane Smith',
      content: '👋',
    },
    // Add more chat messages here...
  ];
}
