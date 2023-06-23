import {
  Component,
  Injector,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewEncapsulation,
  NgModule,
} from '@angular/core';

import { SimpleAffineEditor } from '@blocksuite/editor';

@NgModule({
  declarations: [SimpleAffineEditor],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EditorComponent {}
