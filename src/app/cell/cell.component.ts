import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

  user;

  day;

  row;

  status;

  constructor(public usuario: string, public dia: number, public fila: number, public estado: number) {
    this.user = usuario;
    this.day = dia;
    this.row = fila;
    this.status = estado;
  }



  ngOnInit() {
  }

}
