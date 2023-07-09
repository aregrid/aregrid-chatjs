import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceItemComponent } from './workspace-item/workspace-item.component';
import { WorkspaceService, Workspace } from '../../services/workspace.service';
import { UserService, User } from '../../services/user.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'aregrid-sidebar',
  standalone: true,
  imports: [CommonModule, WorkspaceItemComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  workspaces!: Workspace[];
  user!: User;
  sidebarCollapsed = false;

  constructor(
    private workspaceService: WorkspaceService,
    private userService: UserService
  ) {}
  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
  ngOnInit() {
    this.userService.getUser().subscribe((user: User) => {
      this.user = user;
    });

    this.workspaceService.workspaces$.subscribe((workspaces: Workspace[]) => {
      this.workspaces = workspaces;
    });
  }
  addWorkspace() {
    const id = uuidv4();
    const workspace = {
      id: id,
      avatar: 'https://example.com/love.jpg',
      name: id,
      subtitle: 'No subtitle',
    };
    this.workspaceService.addWorkspace(workspace);
  }
}
