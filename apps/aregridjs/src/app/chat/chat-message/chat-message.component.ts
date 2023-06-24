import { Component, Input } from '@angular/core';

@Component({
  selector: 'aregrid-chat-message',
  templateUrl: './chat-message.component.html',
  standalone: true,
})
export class ChatMessageComponent {
  @Input() avatar: string | undefined;
  @Input() userName: string | undefined;
}
