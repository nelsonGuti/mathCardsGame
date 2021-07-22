import { Component, OnInit } from '@angular/core';
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
  constructor() {}

  ngOnInit(): void {}
}
