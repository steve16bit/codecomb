import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

type contactForm = {
  email: string;
  name: string;
  phone: string;
  message: string;
};

@Component({
  selector: 'app-card-main',
  imports: [FormsModule, CommonModule],
  templateUrl: './card-main.component.html',
  styleUrl: './card-main.component.scss',
})
export class CardMainComponent {
  form: contactForm = {
    email: '',
    name: '',
    phone: '',
    message: '',
  };

  @Input() isFormVisible: boolean = false;
  @Output() showFormOnMainCard = new EventEmitter<boolean>();

  showForm() {
    console.log(window.innerWidth)
    if(!(window.innerWidth < 768)) {
      console.log('TESTE TESTE TESTE')
      this.showFormOnMainCard.emit();
    }
  }

  sendEmail() {
    emailjs
      .send(
        'service_i78syll',
        'template_tdcwqu5',
        { ...this.form },
        { publicKey: 'dTUH1n4qGei0ggZL9' }
      )
      .then(() => {
        console.log(this.form);
        console.log('sent');
      });
  }
}
