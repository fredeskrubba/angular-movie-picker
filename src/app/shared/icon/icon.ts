import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  imports: [CommonModule],
  templateUrl: './icon.html',
})
export class Icon {
  @Input() name!: string;
  @Input() size: number = 24;
}
