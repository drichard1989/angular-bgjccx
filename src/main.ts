import 'zone.js/dist/zone';
import { Component } from '@angular/core';
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
export class App {
  constructor(public dataService: DataService) {}
  name = 'Angular';
  private myName: string = 'Dylan';
  public myPublicName: string = 'Dylan Public';
}

bootstrapApplication(App);
