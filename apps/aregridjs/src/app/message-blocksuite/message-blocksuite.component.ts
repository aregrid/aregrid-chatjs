import {
  Component,
  Injector,
  // CUSTOM_ELEMENTS_SCHEMA,
  ViewEncapsulation,
  NgModule,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { SimpleAffineEditor } from '@blocksuite/editor';

// import '@blocksuite/editor/themes/affine.css';
// import './affine.scss';

@Component({
  selector: 'aregrid-message-blocksuite',
  standalone: true,
  imports: [CommonModule],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './message-blocksuite.component.html',
  styleUrls: ['./message-blocksuite.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class MessageBlocksuiteComponent {
  // constructor(private injector: Injector) {
  //   customElements.define('editor-aa', SimpleAffineEditor);
  // }
}
