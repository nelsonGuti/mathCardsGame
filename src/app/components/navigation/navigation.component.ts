import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { faCog, faHome, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    standalone: true,
    imports: [RouterLink, NgClass, FontAwesomeModule]
})
export class NavigationComponent implements OnInit {
  faCog = faCog;
  faHome = faHome;
  faGamepad = faGamepad;

  get route() {
    return this.router.url;
  }
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
