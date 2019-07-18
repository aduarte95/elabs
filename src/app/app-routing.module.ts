import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import {HeaderComponent} from './header/header.component';
import {InicioComponent} from './inicio/inicio.component';
import {InicioAdministratorComponent} from './inicio-administrator/inicio-administrator.component';
import {ReservationComponent} from './reservation/reservation.component';
import {LogInComponent} from './log-in/log-in.component';
import {RegistrationComponent} from './registration/registration.component';
import {UserListComponent} from './user-list/user-list.component';
import {LabAdministratorComponent} from './lab-administrator/lab-administrator.component';

const routes: Routes = [
  { path: 'calendario', component: CalendarComponent },
  {path: 'inicio-administrador', component: InicioAdministratorComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'headerComponent', component: HeaderComponent},
  {path: 'reservacion/:numeroLab', component: ReservationComponent},
  {path: 'ingresar', component: LogInComponent},
  {path: 'registrar', component: RegistrationComponent},
    {path: 'user-list', component: UserListComponent},
  {path: 'lab-administrador/:numeroLab', component: LabAdministratorComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
