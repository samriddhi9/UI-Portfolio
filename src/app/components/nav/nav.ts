import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone:true,
  imports: [
    RouterLink
  ],
  templateUrl: './nav.html',
  styleUrl: '/nav.scss'
})
export class Nav {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
