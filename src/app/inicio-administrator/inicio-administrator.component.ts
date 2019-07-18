import { Component, OnInit, Input } from '@angular/core';
import {HeaderTalkerService} from '../../services/headerTalker/header-talker.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio-administrator',
  templateUrl: './inicio-administrator.component.html',
  styleUrls: ['./inicio-administrator.component.scss']
})
export class InicioAdministratorComponent implements OnInit {

  labs = [
    {numer: 102, capacidad: 25, estado: 0},
    {numer: 104, capacidad: 25, estado: 0},
    {numer: 105, capacidad: 25, estado: 1},
    {numer: 106, capacidad: 25, estado: 0},
    {numer: 107, capacidad: 25, estado: 2}
  ];



  estado = [
      'btn btn-success',
      'btn btn-danger',
      'btn btn-warning',
  ];

  constructor(private headerTalkerService: HeaderTalkerService, private router: Router) { }

  ngOnInit() {
    if (this.headerTalkerService.subsBar === undefined) {
      this.headerTalkerService.subsBar = this.headerTalkerService.sendBuildsToInitScreen.
      subscribe(() => {
        this.changeLab();
      });
    }
  }

  changeLab() {
    alert('hola');
  }

  passToReservation(lab) {
    this.router.navigate(['reservacion', lab]);

  }

}
