import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import {HeaderComponent} from './header/header.component';
import {InicioComponent} from './inicio/inicio.component';
import {InicioAdministratorComponent} from './inicio-administrator/inicio-administrator.component';

const routes: Routes = [
  { path: 'calendario', component: CalendarComponent },
  {path: 'inicioAdministrador', component: InicioAdministratorComponent},
  {path: 'inicioComponent', component: InicioComponent},
  {path: 'headerComponent', component: HeaderComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
