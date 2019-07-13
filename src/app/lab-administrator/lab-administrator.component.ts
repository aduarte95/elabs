import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab-administrator',
  templateUrl: './lab-administrator.component.html',
  styleUrls: ['./lab-administrator.component.scss']
})
export class LabAdministratorComponent implements OnInit {
  chosenType = 0;
  currentDevice = 0;
  deviceType = [
      'Computadora',
      'Video Beam'
  ];

  devices = [
      '#178485',
      '#278485',
      '#378485',
      '#478485',
      '#578485',
      '#678485',
      '#778485',
      '#878485',
      '#978485',
      '#188485',
      '#288485',
      '#388485',
      '#488485',
      '#588485',
      '#688485',
      '#788485'
  ];

  constructor() { }

  ngOnInit() {
  }

  setChosenType(index) {
    this.chosenType = index;
  }

}
