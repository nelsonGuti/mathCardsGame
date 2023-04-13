import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { GamesModule } from './app/components/games/games/games.module';
import { SettingsModule } from './app/components/settings/settings.module';
import { AppRoutingModule } from './app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeModule } from './app/components/home/home.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, HomeModule, FontAwesomeModule, AppRoutingModule, SettingsModule, GamesModule),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
