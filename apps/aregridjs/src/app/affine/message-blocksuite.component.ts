import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Renderer2,
  Input,
} from '@angular/core';
import pageSnapShotForChat from './page-snapshot-chat';
import pageSnapShotForAFFiNE from './page-snapshot-affine';

import { CommonModule } from '@angular/common';
import { SimpleAffineEditor } from '@blocksuite/editor';

@Component({
  selector: 'aregrid-affine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './affine.component.html',
  styleUrls: ['./affine.component.scss'],
})
export class AFFiNEComponent implements AfterViewInit {
  @ViewChild('messageBox') messageBox: ElementRef<HTMLDivElement> | null = null;
  constructor(private renderer: Renderer2) {}
  @Input() templateId: string | undefined;

  ngAfterViewInit() {
    const editor = new SimpleAffineEditor();
    this.messageBox && this.messageBox.nativeElement.appendChild(editor);

    (window as any).blocksuiteEditor = editor;

    if (this.templateId === 'chat') {
      editor.workspace.importPageSnapshot(
        pageSnapShotForChat.data['space:hello-world'],
        'page0'
      );
    }
    if (this.templateId === 'affine') {
      editor.workspace.importPageSnapshot(
        pageSnapShotForAFFiNE.data['space:hello-world'],
        'page0'
      );
    }
  }
}
