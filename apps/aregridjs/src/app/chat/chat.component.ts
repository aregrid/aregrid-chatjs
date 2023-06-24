import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBlocksuiteComponent } from '../message-blocksuite/message-blocksuite.component';
import { HeaderComponent } from './header/header.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatHistoryMock } from './chat-history-mock';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'aregrid-chat',
  standalone: true,
  imports: [
    CommonModule,
    MessageBlocksuiteComponent,
    HeaderComponent,
    ChatMessageComponent,
    FooterComponent,
  ],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  chatMessages: { avatar: string; userName: string; content: string }[] = [];
  currentIndex = 0;
  timer: any;
  ngOnInit() {
    const messages = ChatHistoryMock.getMessages();

    this.timer = setInterval(() => {
      if (this.currentIndex < messages.length) {
        const newMessage = messages[this.currentIndex];
        this.chatMessages.push(newMessage);
        this.currentIndex++;
      } else {
        clearInterval(this.timer);
      }
    }, 500);
  }
}
