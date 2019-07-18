import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lab-administrator',
  templateUrl: './lab-administrator.component.html',
  styleUrls: ['./lab-administrator.component.scss']
})
export class LabAdministratorComponent implements OnInit {
  chosenType = 0;
  currentDevice = 0;

  actualLab;

  deviceType = [
      'Computadora',
      'Video Beam'
  ];

  devices = [
    {serial: '#178485', tEquipo: 'Computadora', eEquipo: 1 },
    {serial: '#278485', tEquipo: 'Computadora', eEquipo: 1 },
    {serial: '#378485', tEquipo: 'Computadora', eEquipo: 0 },
    {serial: '#478485', tEquipo: 'Computadora', eEquipo: 1 },
    {serial: '#578485', tEquipo: 'Computadora', eEquipo: 1 },
    {serial: '#678485', tEquipo: 'Computadora', eEquipo: 0 },
    {serial: '#778485', tEquipo: 'Computadora', eEquipo: 1 },
    {serial: '#878485', tEquipo: 'Computadora', eEquipo: 1 },
    {serial: '#978485', tEquipo: 'Computadora', eEquipo: 1 },
    {serial: '#188485', tEquipo: 'Computadora', eEquipo: 1 },
    {serial: '#288485', tEquipo: 'Computadora', eEquipo: 1 },
    {serial: '#388485', tEquipo: 'Computadora', eEquipo: 0 },
    {serial: '#488485', tEquipo: 'Computadora', eEquipo: 1 },
    {serial: '#588485', tEquipo: 'Computadora', eEquipo: 1 },
    {serial: '#688485', tEquipo: 'Video Beam', eEquipo: 1 }
  ];

  status = [
      'btn btn-danger',
      'btn btn-success'
  ];

  damage = [
      'checked',
      ''
  ]


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let numberLab = parseInt(this.route.snapshot.paramMap.get('numeroLab'));
    this.actualLab = numberLab;
  }

  setChosenType(index) {
    this.chosenType = index;
  }

  setCurrentDevice(index) {
    this.currentDevice = index;
  }

}
