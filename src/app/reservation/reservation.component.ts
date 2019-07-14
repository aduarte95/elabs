import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  dayAsked = 6;

  weekday = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado'
  ];

  constructor() { }

  ngOnInit() {
    // const d = new Date();
    // console.log(this.weekday[d.getDay()]);
  }

  changeDay(){

  }

}
