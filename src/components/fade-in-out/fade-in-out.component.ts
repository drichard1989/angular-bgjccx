import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

const enterTransition = transition(':enter', [
  style({
    opacity:0
  }),
  animate('2s ease-in', style({ opacity:1 })),
])

const exitTransition = transition(':leave', [
  style({
    opacity:1
  }),
  animate('2s ease-out', style({ opacity:0 })),
])


const fadeIn = trigger('fadeIn', [enterTransition])
const fadeOut = trigger('fadeOut', [exitTransition])


@Component({
  selector: 'app-fade-in-out',
  templateUrl: './fade-in-out.component.html',
  styleUrls: ['./fade-in-out.component.css'],
  animations: [fadeIn, fadeOut],
})
export class FadeInOutComponent implements OnInit {

  isShown = false;

fadeInOut(): void {
    this.isShown = !this.isShown;
  }

  constructor() { }

  ngOnInit() {
  }

}