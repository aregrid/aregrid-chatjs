import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceItemComponent } from './workspace-item/workspace-item.component';
@Component({
  selector: 'aregrid-sidebar',
  standalone: true,
  imports: [CommonModule, WorkspaceItemComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  workspaces = [
    {
      avatar:
        'https://randomwordgenerator.com/img/picture-generator/55e9d4424f56ae14f1dc8460962e33791c3ad6e04e507749712e79d1974bc6_640.jpg',
      name: 'Company A',
      subtitle: 'Shared Office Space',
    },
    {
      avatar:
        'https://randomwordgenerator.com/img/picture-generator/55e9d4424f56ae14f1dc8460962e33791c3ad6e04e507749712e79d1974bc6_640.jpg',
      name: 'Company B',
      subtitle: 'Collaborative Workspace',
    },
    {
      avatar:
        'https://randomwordgenerator.com/img/picture-generator/55e9d4424f56ae14f1dc8460962e33791c3ad6e04e507749712e79d1974bc6_640.jpg',
      name: 'Company C',
      subtitle: 'Creative Studio',
    },
    {
      avatar:
        'https://randomwordgenerator.com/img/picture-generator/55e9d4424f56ae14f1dc8460962e33791c3ad6e04e507749712e79d1974bc6_640.jpg',
      name: 'Company D',
      subtitle: 'Virtual Office',
    },
    {
      avatar:
        'https://randomwordgenerator.com/img/picture-generator/55e9d4424f56ae14f1dc8460962e33791c3ad6e04e507749712e79d1974bc6_640.jpg',
      name: 'Company E',
      subtitle: 'Meeting Room Rental',
    },
  ];
}
