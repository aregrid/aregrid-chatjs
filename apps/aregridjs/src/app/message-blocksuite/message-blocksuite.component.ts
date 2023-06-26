import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Renderer2,
  Input,
} from '@angular/core';
import pageSnapShot from './page-snapshot-mock';
import { CommonModule } from '@angular/common';
import { SimpleAffineEditor } from '@blocksuite/editor';

@Component({
  selector: 'aregrid-message-blocksuite',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-blocksuite.component.html',
  styleUrls: ['./message-blocksuite.component.scss'],
})
export class MessageBlocksuiteComponent implements AfterViewInit {
  @ViewChild('messageBox') messageBox: ElementRef<HTMLDivElement> | null = null;
  constructor(private renderer: Renderer2) {}
  @Input() templateId: string | undefined;

  ngAfterViewInit() {
    const editor = new SimpleAffineEditor();
    this.messageBox && this.messageBox.nativeElement.appendChild(editor);

    (window as any).blocksuiteEditor = editor;

    if (this.templateId === 'affine') {
      editor.workspace.importPageSnapshot(
        pageSnapShot.data['space:hello-world'],
        'page0'
      );
    }
  }
}
