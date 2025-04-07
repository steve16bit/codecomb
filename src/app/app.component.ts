import { Component } from '@angular/core';
import { CardMainComponent } from "./components/card-main/card-main.component";
import { CardSuccessRouteComponent } from "./components/card-success-route/card-success-route.component";
import { CardAboutComponent } from "./components/card-about/card-about.component";
import { CardContactComponent } from "./components/card-contact/card-contact.component";

@Component({
  selector: 'app-root',
  imports: [CardMainComponent, CardSuccessRouteComponent, CardAboutComponent, CardContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'codecomb'; 
  isFormVisible: boolean = false;

  showForm() {
    this.isFormVisible = !this.isFormVisible;
  }
}
