import { Component, OnInit } from '@angular/core';
import {MenuItem} from './../menu-item';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.css']
})
export class MenuSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'home',
      link: 'index',
    },
    {
      label: 'About Us',
      icon: 'help',
      link: 'about',
    },
    {
      label: 'Services',
      icon: 'settings',
      link: 'service',
    },
    {
      label: 'Careers',
      icon: 'laptop',
      link: 'careers',
    },
    {
      label: 'Contact Us',
      icon: 'smartphone',
      link: 'contact',
    },
    {
      label: 'Login',
      icon: 'login',
      link: 'login',
    },
  ];

}
