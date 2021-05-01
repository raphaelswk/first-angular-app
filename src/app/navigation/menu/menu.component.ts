import { Component } from '@angular/core';

interface Nav {
  link: string,
  name: string,
  exact: boolean,
  admin: boolean
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html' 
})
export class MenuComponent {
  nav: Nav[] = [
    {
      link: '/home',
      name: 'Home',
      exact: true,
      admin: false
    },
    {
      link: '/register',
      name: 'Register',
      exact: true,
      admin: false
    },
    {
      link: '/about',
      name: 'About',
      exact: true,
      admin: false
    },
    {
      link: '/products-dashboard',
      name: 'Products',
      exact: false,
      admin: false
    },
    {
      link: '/feature-data-binding',
      name: 'Features',
      exact: true,
      admin: false
    },
    {
      link: '/admin',
      name: 'Admin',
      exact: true,
      admin: true
    },
  ]
}
