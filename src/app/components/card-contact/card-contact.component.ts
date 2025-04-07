import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-contact',
  imports: [],
  templateUrl: './card-contact.component.html',
  styleUrl: './card-contact.component.scss'
})
export class CardContactComponent {
  @Output() showFormOnMainCard = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {
    
  }

  showForm() {
    console.log(`TEST`)
    this.showFormOnMainCard.emit(true)
  }
}
