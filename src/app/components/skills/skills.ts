import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
// animate-on-scroll.directive.ts
import {
  Directive,
  ElementRef,
  HostBinding,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent {
  skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'CSS', level: 90 },
    { name: 'Angular', level: 95 },
    { name: 'TypeScript', level: 85 },
    { name: 'SCSS', level: 80 },
    { name: 'HTML5', level: 95 },
  ];

  @HostBinding('class.animated') isVisible = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          observer.unobserve(this.el.nativeElement);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(this.el.nativeElement);
  }
}
