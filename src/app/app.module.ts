import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataService } from '../data.service';
import { UtilityService } from '../utility.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpenCloseComponent } from '../components/open-close/open-close.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule],
  declarations: [AppComponent, OpenCloseComponent],
  bootstrap: [AppComponent],
  providers: [DataService, UtilityService],
})
export class AppModule {}
