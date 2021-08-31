import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCog, faHome, faGamepad } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
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
