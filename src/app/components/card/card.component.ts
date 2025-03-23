import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() isMainCard: boolean = false;
  @Input() contentTitle: string = ''; 
  @Input() content: string = '';
  @Input() id: string = '';

  constructor() {}

  ngOnInit(): void {}
}
