import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../../services/reservation/reservation.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  currentMonth = 0;
  currentDay = 2;
  numberOfDays = 31;

  months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Setiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];

  days = [
    '',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo'
  ];

  available: boolean[][];

  constructor(protected reservationService: ReservationService) { }

  ngOnInit() {
    this.reservationService.getReservations()
        .subscribe(
            (data) => { // Success
              console.log(data);
            },
            (error) => {
              console.error(error);
            }
        );

    this.setAvailable();
    this.available[1][6] = false;
  }

  setCurrentMonth(index) {
    this.currentMonth = index;
  }

  counter(i) {
      return new Array(i);
  }

  setCurrentDay(index) {
    this.currentDay = index;
  }

  isAvailable(i,j) {
      return this.available[i][j];
  }

  setAvailable() {
      this.available = [];

      for (let i = 0; i < 16; ++i) {
          this.available[i] = [];

          for (let j = 0; j  < 7; j++) {
              this.available[i][j] = true;
          }
      }
  }

  //TODO: Hay que convertir el numero de dias a un dia del 1-7
    toWeekDay() {
      return 3;
    }
}
