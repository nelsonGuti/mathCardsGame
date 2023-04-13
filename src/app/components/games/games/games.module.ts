import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games.component';
import { AppRoutingModule } from 'src/app/app-routing.module';





@NgModule({
    imports: [
    CommonModule,
    AppRoutingModule,
    CommonModule,
    GamesComponent
],
    exports: [GamesComponent]
})
export class GamesModule {}
