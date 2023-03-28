import 'zone.js/dist/zone';
import {
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  Component,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  providers: [DataService],
  templateUrl: 'main.html',
})
export class App implements OnInit, AfterViewInit, AfterViewChecked {
  constructor(public dataService: DataService) {
    console.log('constructor implemented');
  }
  nameTest = 'Katie'
  name = 'Angular';
  private myName: string = 'Dylan';
  public myPublicName: string = 'Dylan Public';

  ngOnInit() {
    console.log('ngOnInit implemented');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit implemented');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked implemented');
  }
}

bootstrapApplication(App);
