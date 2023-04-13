import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [NavigationComponent, HeaderComponent, RouterOutlet]
})
export class AppComponent {
  title = 'math-cards-game';
}
