import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Renderer2,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { SimpleAffineEditor } from '@blocksuite/editor';

@Component({
  selector: 'aregrid-message-blocksuite',
  standalone: true,
  imports: [CommonModule],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './message-blocksuite.component.html',
  styleUrls: ['./message-blocksuite.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class MessageBlocksuiteComponent implements AfterViewInit {
  @ViewChild('messageBox') messageBox: ElementRef<HTMLDivElement> | null = null;
  constructor(private renderer: Renderer2) {}
  ngAfterViewInit() {
    // ElementRef: { nativeElement: <input> }
    // console.log(this.input);

    // // Access the input object or DOM node
    // console.dir(this.input.nativeElement);

    // Manipulate via Renderer2
    // this.renderer.setStyle(this.input.nativeElement, 'background', '#d515a0');
    const editor = new SimpleAffineEditor();
    this.messageBox && this.messageBox.nativeElement.appendChild(editor);
  }
}
