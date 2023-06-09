import 'zone.js/dist/zone';
import {
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  Component,
} from '@angular/core';
import { DataService } from '../data.service';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {
  constructor(
    public dataService: DataService,
    public utilityService: UtilityService
  ) {
    console.log('constructor implemented');
    //public variable used
    console.log(this.utilityService.Chloe);
    //private variable used  -- received error that "property does not exist on type UtilityService"
    // console.log(this.utilityService.trayden);
  }
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
