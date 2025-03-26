import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./components/card/card.component";
import { CardMainComponent } from "./components/card-main/card-main.component";
import { CardSuccessRouteComponent } from "./components/card-success-route/card-success-route.component";
import { CardAboutComponent } from "./components/card-about/card-about.component";
import { CardContactComponent } from "./components/card-contact/card-contact.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent, CardMainComponent, CardSuccessRouteComponent, CardAboutComponent, CardContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'codecomb';
}
