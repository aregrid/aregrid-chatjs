import { RouterModule } from '@angular/router';
import { SimpleAffineEditor } from '@blocksuite/editor';
import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Renderer2,
  Input,
} from '@angular/core';
import pageSnapShotForAFFiNE from './page-snapshot-affine';
@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'aregrid-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('noteBox') messageBox: ElementRef<HTMLDivElement> | null = null;
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const editor = new SimpleAffineEditor();
    this.messageBox && this.messageBox.nativeElement.appendChild(editor);

    (window as any).blocksuiteEditor = editor;

    editor.workspace.importPageSnapshot(
      pageSnapShotForAFFiNE.data['space:hello-world'],
      'page0'
    );
  }
}
