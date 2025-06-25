import { Component } from '@angular/core';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [],
  standalone:true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {

  constructor(private  router: Router) {
  }
  scrollToProjects() {
    this.router.navigate(['/projects'])
  }
}
