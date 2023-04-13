import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import(
        './app/components/home/card-container/card-container.component'
      ).then((m) => m.CardContainerComponent),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./app/components/settings/settings/settings.component').then(
        (m) => m.SettingsComponent
      ),
  },
  {
    path: 'games',
    loadComponent: () =>
      import('./app/components/games/games/games.component').then(
        (m) => m.GamesComponent
      ),
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, FontAwesomeModule),
    provideRouter(routes),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));
