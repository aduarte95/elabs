import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../services/users/user.service';
import { CalendarComponent } from './calendar/calendar.component';
import { PopUpCalendarComponent } from './pop-up-calendar/pop-up-calendar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    PopUpCalendarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
