import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, SidebarComponent],
  selector: 'aregrid-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'aregridjs';
}
