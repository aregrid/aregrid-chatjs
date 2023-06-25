import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'aregrid-workspace-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workspace-item.component.html',
  styleUrls: ['./workspace-item.component.scss'],
})
export class WorkspaceItemComponent {
  @Input() avatar: string | undefined;
  @Input() name: string| undefined;
  @Input() subtitle: string| undefined;
}
