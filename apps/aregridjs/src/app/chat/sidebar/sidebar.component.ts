import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceItemComponent } from './workspace-item/workspace-item.component';
import { WorkspaceService } from '../../services/workspace.service';
import { Workspace } from '../../services/workspace-store.service';

@Component({
  selector: 'aregrid-sidebar',
  standalone: true,
  imports: [CommonModule, WorkspaceItemComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  workspaces!: Workspace[];

  constructor(private workspaceService: WorkspaceService) {}

  ngOnInit() {
    this.workspaceService.workspaces$.subscribe((workspaces: Workspace[]) => {
      this.workspaces = workspaces;
    });

    const DEFAULT_WORKSPACES = [
      {
        avatar: 'https://example.com/lifestyle.jpg',
        name: 'Life',
        subtitle: 'Record special moments',
      },
      {
        avatar: 'https://example.com/creativity.jpg',
        name: 'Creativity',
        subtitle: 'Explore artistic expressions',
      },
      {
        avatar: 'https://example.com/art.jpg',
        name: 'Art',
        subtitle: 'Express your artistic side',
      },
      {
        avatar: 'https://example.com/thoughts.jpg',
        name: 'Thoughts',
        subtitle: 'Capture your ideas and reflections',
      },
      {
        avatar: 'https://example.com/love.jpg',
        name: 'Love',
        subtitle: 'Celebrate the power of love',
      },
    ];
    this.workspaceService.setWorkspaces(DEFAULT_WORKSPACES);
  }
  addWorkspace() {
    const workspace = {
      avatar: 'https://example.com/love.jpg',
      name: 'Love',
      subtitle: 'Celebrate the power of love',
    };
    this.workspaceService.addWorkspace(workspace);
  }
}
