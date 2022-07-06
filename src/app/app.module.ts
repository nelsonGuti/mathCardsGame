import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeModule } from './components/home/home.module';
import { SettingsModule } from './components/settings/settings.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GamesModule } from './components/games/games/games.module';
import { HeaderComponent } from './components/header/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, NavigationComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HomeModule,
    FontAwesomeModule,
    AppRoutingModule,
    SettingsModule,
    GamesModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
