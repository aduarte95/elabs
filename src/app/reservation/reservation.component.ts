import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


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

actualLab;

endHour;
showEndHour;


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
      {hour: '8:00', hourEnd: 8},
      {hour: '9:00', hourEnd: 9},
      {hour: '10:00', hourEnd: 10},
      {hour: '11:00', hourEnd: 11},
      {hour: '12:00', hourEnd: 12},
      {hour: '13:00', hourEnd: 13},
      {hour: '14:00', hourEnd: 14},
      {hour: '15:00', hourEnd: 15},
      {hour: '16:00', hourEnd: 16},
      {hour: '17:00', hourEnd: 17},
      {hour: '18:00', hourEnd: 18},
      {hour: '19:00', hourEnd: 19},
      {hour: '20:00', hourEnd: 20},
      {hour: '21:00', hourEnd: 21},
      {hour: '22:00', hourEnd: 22}
  ];

  responses = [  // prueba de respuestas de base de datos
      {usuarrio: 'Braulio Solano', fecha_inicio: '2019-07-15T07:00:00', fecha_fin: '2019-07-15T10:00:00'},
      {usuarrio: 'Braulio Solano', fecha_inicio: '2019-07-15T13:00:00', fecha_fin: '2019-07-15T15:00:00'},
      {usuarrio: 'Braulio Solano', fecha_inicio: '2019-07-18T07:00:00', fecha_fin: '2019-07-18T10:00:00'},
      {usuarrio: 'Braulio Solano', fecha_inicio: '2019-07-18T13:00:00', fecha_fin: '2019-07-18T15:00:00'}

  ];




  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // const d = new Date();
    // console.log(this.weekday[d.getDay()]);
      let numberLab = parseInt(this.route.snapshot.paramMap.get('numeroLab'));
     // let capacidad = parseInt (this.route.snapshot.paramMap.get('capacidad'));
      this.actualLab = numberLab;

      console.log(this.actualLab);

      this.fillMap();
      this.fillCellsToColour();
      const hoy = new Date();

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
              // console.log(this.validDate[j]);


              if ((j === 0) || ((j === 6) && (i >= 11))) {

                  this.obForMatrix = new Cell('--', temporalDate.getDay(), i, 2, date, i + 7 );
                  this.matrix[i][j] = this.obForMatrix;
              }
              if (!((j === 0) || ((j === 6) && (i >= 11)))) {
                  this.obForMatrix = new Cell('Libre',  temporalDate.getDay(), i, 0, date, i + 7 );
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
              if (this.validDate.includes(this.getFormatedDate(this.beginDate))) {
                  console.log('tumama');
                  this.obForMatrix = new Cell(usuario, dia, row, 1, 'prueba', 0);
                  this.matrix[row][dia] = this.obForMatrix;
                  console.log(this.matrix[row][dia].status);
              }

          }
      }
  }

  cellComponent(indexR, indexC) {
      let nuevo = new Cell('', 1, 1, 5, '', 0);
      nuevo = this.matrix[indexR][indexC];
      console.log(nuevo.usuario);
      this.actualCellDate = nuevo.date;
      this.actualCellHour = nuevo.hour;
      this.endHour = this.actualCellHour+1;

  }

  getFormatedDate(date) {
      let formatedDate = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
      console.log(formatedDate);

      return formatedDate;


}

setEndHour (hour){
      this.endHour = hour+8;
      console.log(this.endHour);
}





}

class Cell {
    user;

    day;

    line;

    status;

    date;
    hour;

    constructor(public usuario: string, public dia: number, public fila: number, public estado: number, public fecha: string, public hora: number ) {
        this.user = usuario;
        this.day = dia;
        this.line = fila;
        this.status = estado;
        this.date = fecha;
        this.hour = hora;
    }

}
