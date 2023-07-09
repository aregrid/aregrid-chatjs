import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, first } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
export interface ChatMessage {
  id?: string;
  userAvatar: string;
  userName: string;
  type?: string;
  content: string;
}
export interface Workspace {
  id: string;
  avatar: string;
  name: string;
  subtitle: string;
  chatMessages?: ChatMessage[];
}

@Injectable({
  providedIn: 'root',
})
export class WorkspaceService {
  private workspacesSubject: BehaviorSubject<Workspace[]> = new BehaviorSubject<
    Workspace[]
  >([]);
  private currentWorkspaceSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');

  get workspaces$(): Observable<Workspace[]> {
    return this.workspacesSubject.asObservable();
  }
  get currentWorkspace$(): Observable<string> {
    return this.currentWorkspaceSubject.asObservable();
  }

  constructor() {
    // Initialize with some default workspaces
    const DEFAULT_WORKSPACES = [
      {
        id: uuidv4(),
        avatar: 'https://example.com/lifestyle.jpg',
        name: 'Life',
        subtitle: 'Record special moments',
        chatMessages: [
          {
            userAvatar: 'https://avatars.githubusercontent.com/u/5910926?v=4',
            userName: 'Chi Zhang',
            type: 'affine',
            content: '',
          },
          {
            userAvatar: 'https://avatars.githubusercontent.com/u/5910926?v=4',
            userName: 'Chi Zhang',
            content:
              "I have some ideas for the new iteration of aregridjs. Let's discuss!",
            type: 'text',
          },
          {
            userAvatar:
              'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/35/35547e0ab2d4ff89ed4d1b5347f2ec27170ee224_full.jpg',
            userName: 'Jack',
            content:
              "Sure, I'm excited to hear your ideas. Let's make aregridjs even better!",
            type: 'text',
          },
          {
            userAvatar: 'https://avatars.githubusercontent.com/u/5910926?v=4',
            userName: 'Chi Zhang',
            content:
              'I think we should prioritize improving the documentation.',
            type: 'text',
          },

          {
            userAvatar:
              'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/35/35547e0ab2d4ff89ed4d1b5347f2ec27170ee224_full.jpg',
            userName: 'Jack',
            content:
              'We can gather feedback from the community for feature requests.',
            type: 'text',
          },

          {
            userAvatar: 'https://avatars.githubusercontent.com/u/5910926?v=4',
            userName: 'Chi Zhang',
            content: 'I will prepare a roadmap for the next iteration.',
            type: 'text',
          },
        ],
      },
      {
        id: uuidv4(),
        avatar: 'https://example.com/creativity.jpg',
        name: 'Creativity',
        subtitle: 'Explore artistic expressions',
        chatMessages: [],
      },
    ];
    this.setWorkspaces(DEFAULT_WORKSPACES);

    this.workspaces$.pipe(first()).subscribe((workspaces) => {
      if (workspaces.length > 0) {
        this.currentWorkspaceSubject.next(workspaces[0].id);
      }
    });
  }
  public getWorkspaceById(workspaceId: string): Workspace | undefined {
    const workspaces = this.getWorkspaces();
    return workspaces.find((workspace) => workspace.id === workspaceId);
  }

  getWorkspaces(): Workspace[] {
    return this.workspacesSubject.getValue();
  }

  addWorkspace(workspace: Workspace): void {
    const currentWorkspaces = this.getWorkspaces();
    const updatedWorkspaces = [...currentWorkspaces, workspace];
    this.workspacesSubject.next(updatedWorkspaces);
  }
  setWorkspaces(workspaces: Workspace[]): void {
    this.workspacesSubject.next(workspaces);
  }
  updateWorkspace(workspaceId: string, updatedWorkspace: Workspace): void {
    const currentWorkspaces = this.getWorkspaces();
    const workspaceIndex = currentWorkspaces.findIndex(
      (workspace) => workspace.id === workspaceId
    );
    if (workspaceIndex !== -1) {
      currentWorkspaces[workspaceIndex] = updatedWorkspace;
      this.workspacesSubject.next(currentWorkspaces);
    }
  }

  addChatMessage(workspaceName: string, chatMessage: ChatMessage): void {
    const currentWorkspaces = this.getWorkspaces();
    const workspaceIndex = currentWorkspaces.findIndex(
      (w) => w.name === workspaceName
    );

    if (workspaceIndex !== -1) {
      const updatedWorkspaces = [...currentWorkspaces];
      const workspace = updatedWorkspaces[workspaceIndex];

      if (workspace?.chatMessages) {
        workspace.chatMessages.push(chatMessage);
        this.workspacesSubject.next(updatedWorkspaces);
      }
    }
  }
}
