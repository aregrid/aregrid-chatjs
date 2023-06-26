import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AFFiNEComponent } from '../../affine/affine.component';

@Component({
  selector: 'aregrid-footer',
  standalone: true,
  imports: [CommonModule, AFFiNEComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {}
