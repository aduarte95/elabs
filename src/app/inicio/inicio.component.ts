import { Component, OnInit } from '@angular/core';
import {HeaderTalkerService} from '../../services/headerTalker/header-talker.service';
import {LabsServiceService} from '../../services/LabsService/labs-service.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {

  estado = new Map<string, string>();
  private labs = [];

  constructor(private headerTalkerService: HeaderTalkerService, private labService: LabsServiceService ) { }

  ngOnInit() {
    this.estado.set('Disponible', 'btn btn-success');
    this.estado.set('Mantenimiento', 'btn btn-warning');
    this.estado.set('Ocupado' , 'btn btn-warning');
    if (this.headerTalkerService.subsBar === undefined) {
      this.headerTalkerService.subsBar = this.headerTalkerService.sendBuildsToInitScreen.
      subscribe((build: string) => {
        this.changeLab(build);
      });
    }
  }

  changeLab(build: string) {
    this.labs = [];
    this.labService.getLabsByBuild(build)
        .subscribe(res => {
              for (const l of JSON.parse(res.toString())) {
                console.log('En el for');
                console.log(l);
                this.labs.push({numer: l.numero, capacidad: l.capacidad, estado: l.estado_fk});
              }
            }
        );
  }
}
