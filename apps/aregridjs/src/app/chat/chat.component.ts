import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBlocksuiteComponent } from '../message-blocksuite/message-blocksuite.component';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'aregrid-chat',
  standalone: true,
  imports: [CommonModule, MessageBlocksuiteComponent, HeaderComponent],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {}
