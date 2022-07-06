import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {}
  routerSubscription: Subscription;
  header = 'Math Flash Cards';
  subHeader = 'Fun flash cards to practice your math!';

  ngOnInit() {
    this.routerSubscription = this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        this.setHeaders(this.router.url);
      });
  }

  ngOnDestroy() {
    this.routerSubscription?.unsubscribe();
  }

  setHeaders(url: string) {
    if (url.substring(1) === 'home') {
      this.header = 'Math Flash Cards';
      this.subHeader = 'Fun flash cards to practice your math!';
    } else {
      this.header = 'Game On';
      this.subHeader = '';
    }
  }
}
