import { Component} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  navItems = [
    { link: '/home', title: 'Home' },
    { link: '/home', title: 'About' },
    { link: '/home', title: 'Programs' },
    { link: '/home', title: 'Contact Us'}
  ];

  constructor(  ) {}


}
