import { Component, Input } from '@angular/core';

@Component({
  selector: 'aregrid-chat-message',
  template: `
    <div class="mb-4">
      <div class="flex items-center">
        <img [src]="avatar" [alt]="user" class="w-8 h-8 rounded-full" />
        <h2 class="font-bold text-gray-800 ml-2">{{ user }}</h2>
      </div>
      <ng-content></ng-content>
    </div>
  `,
  standalone: true,
})
export class ChatMessageComponent {
  @Input() avatar: string | undefined;
  @Input() user: string | undefined;
}
