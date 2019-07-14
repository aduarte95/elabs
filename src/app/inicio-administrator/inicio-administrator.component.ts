import { Component, OnInit } from '@angular/core';

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
  ]

  constructor() { }

  ngOnInit() {
  }

}
