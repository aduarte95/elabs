import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../services/users/user.service';
import { LabAdministratorComponent } from './lab-administrator/lab-administrator.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { InicioAdministratorComponent } from './inicio-administrator/inicio-administrator.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReservationComponent } from './reservation/reservation.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppComponent,
    LabAdministratorComponent,
    CalendarComponent,
    HeaderComponent,
    InicioAdministratorComponent,
    InicioComponent,
    ReservationComponent,
    LogInComponent,
    RegistrationComponent,
    UserListComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgbModule
    ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
