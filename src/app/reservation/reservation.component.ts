import { Component,  OnInit } from '@angular/core';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  dayAsked = 1;

  hourMap = new Map<number, number>();
  matrix: Cell[][];
 obForMatrix;
 beginDate;
 endDate;
 validDate = [];

 actualCellDate;
 actualCellHour;



  weekday = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado'
  ];

  cTd = [
      'table-success green-new-hover',
    'table-warning yellow-new-hover',
      'table-secondary'
        ];

  hours = [
      {hour: '7:00', row: 0},
      {hour: '8:00', row: 1},
      {hour: '9:00', row: 2},
      {hour: '10:00', row: 3},
      {hour: '11:00', row: 4},
      {hour: '12:00', row: 5},
      {hour: '13:00', row: 6},
      {hour: '14:00', row: 7},
      {hour: '15:00', row: 8},
      {hour: '16:00', row: 9},
      {hour: '17:00', row: 10},
      {hour: '18:00', row: 11},
      {hour: '19:00', row: 12},
      {hour: '20:00', row: 13},
      {hour: '21:00', row: 14}
  ];

  responses = [  // prueba de respuestas de base de datos
      {usuarrio: 'Braulio Solano', fecha_inicio: '2019-07-15T07:00:00', fecha_fin: '2019-07-15T10:00:00'},
      {usuarrio: 'Braulio Solano', fecha_inicio: '2019-07-15T13:00:00', fecha_fin: '2019-07-15T15:00:00'},
      {usuarrio: 'Braulio Solano', fecha_inicio: '2019-07-18T07:00:00', fecha_fin: '2019-07-18T10:00:00'},
      {usuarrio: 'Braulio Solano', fecha_inicio: '2019-07-18T13:00:00', fecha_fin: '2019-07-18T15:00:00'}

  ];




  constructor() { }

  ngOnInit() {
    // const d = new Date();
    // console.log(this.weekday[d.getDay()]);
      this.fillMap();
      this.fillCellsToColour();
      const hoy = new Date();
      console.log(hoy.getDate());
      this.dayAsked = hoy.getDay();

  }



  fillMap() {
    for (let i = 0; i < 15; i++) {
        this.hourMap.set(i + 7, i);
    }

        // this.firstDate = new Date(this.response[0].fecha_inicio);
        // console.log(this.firstDate.getDay());
        // console.log(this.firstDate.getHours());

  }

  fillCellsToColour() {
      this.matrix = [];

      for (let i = 0; i < 15; i++) {
          this.matrix[i] = [];
          let temporalDate = new Date();
          for (let j = 0; j < 7; j++) {
              let date = temporalDate.getFullYear() + '/' + (temporalDate.getMonth() + 1) + '/' + temporalDate.getDate();
              // yourDate.setDate(yourDate.getDate() + 1);
              this.validDate[j] = date;
              console.log(this.validDate[j]);
              

              if ((j === 0) || ((j === 6) && (i >= 11))) {

                  this.obForMatrix = new Cell('--', temporalDate.getDay(), i, 2, date, i + 7 + ':00');
                  this.matrix[i][j] = this.obForMatrix;
              }
              if (!((j === 0) || ((j === 6) && (i >= 11)))) {
                  this.obForMatrix = new Cell('Libre',  temporalDate.getDay(), i, 0, date, i + 7 + ':00');
                  this.matrix[i][j] = this.obForMatrix;
              }
              temporalDate.setDate(temporalDate.getDate() + 1);
          }

      }
      for (const response of this.responses) {
          this.beginDate = new Date(response.fecha_inicio);
          this.endDate = new Date(response.fecha_fin);
          let begin = this.beginDate.getHours();
          let end = this.endDate.getHours();
          let dia = this.beginDate.getDay();
          for (let k = begin; k < end; k++) {
              let usuario = response.usuarrio;
              let row = this.hourMap.get(k);
              if(this.validDate.includes(this.getFormatedDate(this.beginDate))) {
                  this.obForMatrix = new Cell(usuario, dia, row, 1, 'prueba', 'prueba');
                  this.matrix[row][dia] = this.obForMatrix;
              }

          }
      }
  }

  cellComponent(indexR, indexC) {
      let nuevo = new Cell('', 1, 1, 5, '', '');
      nuevo = this.matrix[indexR][indexC];
      this.actualCellDate = nuevo.date;
      this.actualCellHour = nuevo.hour;
      console.log(nuevo.status);
      console.log(nuevo.user);
      console.log(nuevo.date);
      console.log(nuevo.hour);
  }

  getFormatedDate(date) {
      let formatedDate = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
      console.log(formatedDate);
      return formatedDate;
}





}

class Cell {
    user;

    day;

    line;

    status;

    date;
    hour;

    constructor(public usuario: string, public dia: number, public fila: number, public estado: number, public fecha: string, public hora: string ) {
        this.user = usuario;
        this.day = dia;
        this.line = fila;
        this.status = estado;
        this.date = fecha;
        this.hour = hora;
    }

}
