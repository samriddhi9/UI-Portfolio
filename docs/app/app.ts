import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Nav} from './components/nav/nav';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations' ;

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterModule,RouterOutlet, CommonModule, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class App {
  protected title = 'UI-Portfolio';
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
  }
