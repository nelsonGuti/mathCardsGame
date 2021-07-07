import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardContainerComponent } from './components/home/card-container/card-container.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CardContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
