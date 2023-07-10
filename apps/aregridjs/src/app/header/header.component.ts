import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { WorkspaceService } from '../services/workspace.service';

@Component({
  selector: 'aregrid-header',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isHeaderVisible = true;

  toggleHeader(): void {
    this.isHeaderVisible = !this.isHeaderVisible;
  }
  constructor(private workspaceService: WorkspaceService) {}

  exportDataAsFile() {
    this.workspaceService.exportData().subscribe((data: any[]) => {
      const fileName = 'data.aregrid';
      const jsonContent = JSON.stringify(data);
      this.downloadFile(jsonContent, fileName);
    });
  }

  private downloadFile(content: string, fileName: string) {
    const blob = new Blob([content], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();

    URL.revokeObjectURL(url);
  }
  importDataFromAregrid(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (file) {
      // 处理上传文件的逻辑
      this.workspaceService.importDataFromAregrid(file);
    }
  }
}
