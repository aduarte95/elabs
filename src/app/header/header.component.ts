import {Component, NgModule, OnInit} from '@angular/core';
import {NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';
import {BuildsService} from '../../services/BuildService/builds.service';
import {HeaderTalkerService} from '../../services/headerTalker/header-talker.service';

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
    private buildings = [];
    private buttonTextIndice = 0;
    constructor(protected buildService: BuildsService,
                private headerTalkerService: HeaderTalkerService) { }

    ngOnInit() {
    this.buildService.getBuilds()
          .subscribe(res => {
                  for (const b of JSON.parse(res.toString())) {
                      this.buildings.push(b.nombre);
                  }
                  this.sendBuildsToComponents();
              }
          );
    }
    right() {
      if (this.buttonTextIndice === this.buildings.length - 1) {
          this.buttonTextIndice = 0;
      } else {
          this.buttonTextIndice += 1;
      }
      this.sendBuildsToComponents();
    }
    left() {
        if (this.buttonTextIndice === 0 ) {
            this.buttonTextIndice = this.buildings.length - 1 ;
        } else {
            this.buttonTextIndice -= 1;
        }
        this.sendBuildsToComponents();
    }
    changeModel(model) {
    console.log('El modelo es');
    console.log(model);
    }
    sendBuildsToComponents() {
      this.headerTalkerService.sendBuilds(this.buildings[this.buttonTextIndice]);
    }
}
