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
export class WorkspaceStoreService {
  private workspaces: BehaviorSubject<Workspace[]> = new BehaviorSubject<
    Workspace[]
  >([]);

  workspaces$: Observable<Workspace[]> = this.workspaces.asObservable();

  getWorkspaces(): Workspace[] {
    return this.workspaces.getValue();
  }

  setWorkspaces(workspaces: Workspace[]): void {
    this.workspaces.next(workspaces);
  }

  addWorkspace(workspace: Workspace): void {
    const currentWorkspaces = this.getWorkspaces();
    currentWorkspaces.push(workspace);
    this.workspaces.next(currentWorkspaces);
  }
}
