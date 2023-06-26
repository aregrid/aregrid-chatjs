import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBlocksuiteComponent } from '../../message-blocksuite/message-blocksuite.component';

@Component({
  selector: 'aregrid-footer',
  standalone: true,
  imports: [CommonModule, MessageBlocksuiteComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {}
