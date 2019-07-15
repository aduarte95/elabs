import { Component, OnInit } from '@angular/core';
import {HeaderTalkerService} from '../../services/headerTalker/header-talker.service';
import {LabsServiceService} from '../../services/LabsService/labs-service.service';
import {ReservationService} from '../../services/reservation/reservation.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {

  estado = new Map<string, string>();
  private labs = [];
  private reservations = new Map<string, number>();

  constructor(private headerTalkerService: HeaderTalkerService,
              private labService: LabsServiceService,
              private reservationService: ReservationService ) { }

  ngOnInit() {
    this.estado.set('Disponible', 'btn btn-success');
    this.estado.set('Mantenimiento', 'btn btn-warning');
    this.estado.set('Ocupado' , 'btn btn-warning');
    if (this.headerTalkerService.subsBar === undefined) {
      this.headerTalkerService.subsBar = this.headerTalkerService.sendBuildsToInitScreen.
      subscribe(async (build: string) => {
         this.changeLab(build);
      });
    }
  }

  changeLab(build: string) {
    this.labs = [];
    this.getReservations(2019, 6, 24, 10).then(() => {
          console.log(this.reservations);
          this.labService.getLabsByBuild(build)
          .subscribe(res => {
            this.labs = [];
            for (const l of JSON.parse(res.toString())) {
                  if (!this.reservations.has(l.numero)) {
                    this.labs.push({numer: l.numero, capacidad: l.capacidad, estado: l.estado_fk});
                  }
                }
              }
          );
        }
    );
  }

  async getReservations(year: number, month: number, day: number, hour: number) {
    this.reservations.clear();
    const promise = new Promise((resolve, reject) => {

      this.reservationService.getReservartionForLabs(year, month, day, hour)
          .toPromise()
          .then(
              res => { // Success
                // @ts-ignore
                for (const r of res) {
                  this.reservations.set(r.laboratorio_num_fk, 1);
                }
                resolve();
              }
          );
    });
    return promise;
  }
}
