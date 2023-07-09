import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { NgxIndexedDBService } from 'ngx-indexed-db';

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
  constructor(private indexedDBService: NgxIndexedDBService) {
    // Initialize from IndexedDB
    this.initializeFromIndexedDB();
  }

  private initializeFromIndexedDB() {
    this.indexedDBService
      .getAll('workspaces')
      .subscribe((workspaces: unknown[]) => {
        if (workspaces && workspaces.length > 0) {
          this.setWorkspaces(workspaces as Workspace[]);
          this.setCurrentWorkspaceId((workspaces[0] as Workspace)?.id);
        } else {
          const defaultWorkspaces: Workspace[] = [
            {
              id: uuidv4(),
              avatar: 'https://example.com/lifestyle.jpg',
              name: 'Life',
              subtitle: 'Record special moments',
              chatMessages: [
                {
                  userAvatar:
                    'https://avatars.githubusercontent.com/u/5910926?v=4',
                  userName: 'Chi Zhang',
                  type: 'affine',
                  content: '',
                },
                {
                  userAvatar:
                    'https://avatars.githubusercontent.com/u/5910926?v=4',
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
                  userAvatar:
                    'https://avatars.githubusercontent.com/u/5910926?v=4',
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
                  userAvatar:
                    'https://avatars.githubusercontent.com/u/5910926?v=4',
                  userName: 'Chi Zhang',
                  content: 'I will prepare a roadmap for the next iteration.',
                  type: 'text',
                },
              ],
            },
          ];

          this.setWorkspaces(defaultWorkspaces);
          this.setCurrentWorkspaceId((defaultWorkspaces[0] as Workspace)?.id);
        }
      });
  }

  private updateIndexedDB(workspaces: Workspace[]) {
    this.indexedDBService.clear('workspaces').subscribe(() => {
      const addRequests = workspaces.map((workspace) =>
        this.indexedDBService.add('workspaces', workspace)
      );
      forkJoin(addRequests).subscribe(() => {
        console.log('Workspace data updated in IndexedDB');
      });
    });
  }
  public getWorkspaceById(workspaceId: string): Workspace | undefined {
    const workspaces = this.getWorkspaces();
    return workspaces.find((workspace) => workspace.id === workspaceId);
  }

  setCurrentWorkspaceId(workspaceId: string): void {
    this.currentWorkspaceSubject.next(workspaceId);
  }

  getWorkspaces(): Workspace[] {
    return this.workspacesSubject.getValue();
  }

  addWorkspace(workspace: Workspace): void {
    const currentWorkspaces = this.getWorkspaces();
    const updatedWorkspaces = [...currentWorkspaces, workspace];
    this.workspacesSubject.next(updatedWorkspaces);
    this.updateIndexedDB(updatedWorkspaces);
  }
  setWorkspaces(workspaces: Workspace[]): void {
    this.workspacesSubject.next(workspaces);
    this.updateIndexedDB(workspaces);
  }
  updateWorkspace(workspaceId: string, updatedWorkspace: Workspace): void {
    const currentWorkspaces = this.getWorkspaces();
    const workspaceIndex = currentWorkspaces.findIndex(
      (workspace) => workspace.id === workspaceId
    );
    if (workspaceIndex !== -1) {
      currentWorkspaces[workspaceIndex] = updatedWorkspace;
      this.workspacesSubject.next(currentWorkspaces);
      this.updateIndexedDB(currentWorkspaces);
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
        this.updateIndexedDB(updatedWorkspaces);
      }
    }
  }
}
