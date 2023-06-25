import {
  Component,
  Input,
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[aregridHighlightUnderline]',
  standalone: true,
})
export class HighlightUnderlineDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const underline = this.renderer.createElement('span');
    this.renderer.addClass(underline, 'highlight-underline');
    this.renderer.appendChild(this.elementRef.nativeElement, underline);
  }
}

@Component({
  selector: 'aregrid-chat-message',
  hostDirectives: [HighlightUnderlineDirective],
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],

  standalone: true,
})
export class ChatMessageComponent {
  @Input() avatar: string | undefined;
  @Input() userName: string | undefined;
  @Input() content: string | undefined;
}
