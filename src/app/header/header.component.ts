import {Component, NgModule, OnInit} from '@angular/core';
import {NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
@NgModule({
      imports: [NgbDatepicker]
})
export class HeaderComponent implements OnInit {
  model;
  constructor() { }
  ngOnInit() {
  }

}
