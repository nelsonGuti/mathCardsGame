import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnswerCardComponent } from './answer-card/answer-card.component';
import { CardContainerComponent } from './card-container/card-container.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from '../header/header/header.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
    imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule,
    AnswerCardComponent, CardContainerComponent, FooterComponent
],
    exports: [AnswerCardComponent, CardContainerComponent, FooterComponent]
})
export class HomeModule {}
