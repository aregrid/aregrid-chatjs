import { Component, Input } from '@angular/core';
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
  @Input() name: string | undefined;
  @Input() subtitle: string | undefined;
  @Input() sidebarCollapsed = false;
  generateRandomGradient(name: string | undefined) {
    if (!name) name = 'default';
    const colors = [
      'linear-gradient(to right, #ff4e50, #f9d423)',
      'linear-gradient(to right, #a8c0ff, #3f2b96)',
      'linear-gradient(to right, #6a3093, #a044ff)',
      'linear-gradient(to right, #ee9ca7, #ffdde1)',
      'linear-gradient(to right, #a1c4fd, #c2e9fb)',
      'linear-gradient(to right, #56ab2f, #a8e063)',
      'linear-gradient(to right, #f12711, #f5af19)',
      'linear-gradient(to right, #00b4db, #0083b0)',
      'linear-gradient(to right, #c33764, #1d2671)',
      'linear-gradient(to right, #ff6a00, #ee0979)',
    ];

    // 计算 name 的哈希值
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    // 根据哈希值选择随机渐变色
    const randomIndex = Math.abs(hash) % colors.length;
    return colors[randomIndex];
  }
}
