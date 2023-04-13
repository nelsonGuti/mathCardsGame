import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
    imports: [CommonModule, AppRoutingModule, FontAwesomeModule, SettingsComponent],
    exports: [SettingsComponent]
})
export class SettingsModule {}
