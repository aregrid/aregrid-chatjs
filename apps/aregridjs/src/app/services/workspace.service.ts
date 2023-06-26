import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
export interface Workspace {
  avatar: string;
  name: string;
  subtitle: string;
}

@Injectable({
  providedIn: 'root',
})
export class WorkspaceService {
  private workspacesSubject: BehaviorSubject<Workspace[]> = new BehaviorSubject<
    Workspace[]
  >([]);

  get workspaces$(): Observable<Workspace[]> {
    return this.workspacesSubject.asObservable();
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
}
