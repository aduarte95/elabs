import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import {HeaderComponent} from './header/header.component';
import {InicioComponent} from './inicio/inicio.component';
import {InicioAdministratorComponent} from './inicio-administrator/inicio-administrator.component';
import {ReservationComponent} from './reservation/reservation.component';

const routes: Routes = [
  { path: 'calendario', component: CalendarComponent },
  {path: 'inicioAdministrador', component: InicioAdministratorComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'headerComponent', component: HeaderComponent},
  {path: 'reservacion/:numeroLab', component: ReservationComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
