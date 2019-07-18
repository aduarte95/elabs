import {Component, NgModule, OnInit} from '@angular/core';
import {NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';
import {BuildsService} from '../../services/BuildService/builds.service';
import {HeaderTalkerService} from '../../services/headerTalker/header-talker.service';
import {Router} from '@angular/router';

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
  private child = 0;
  // public buildings = [];
  public data = [];
  public buttonTextIndice = 0;
  isLoged = true;
  isAdmin = true;
  constructor(protected buildService: BuildsService,
              private router: Router,
              protected headerTalkerService: HeaderTalkerService) {}

    ngOnInit() {
    this.buildService.getBuilds()
          .subscribe(builds => {
                  for (const b of JSON.parse(builds.toString())) {
                      this.data.push(b.nombre);
                  }
                  this.sendBuildsToComponents();
              }
          );
    this.headerTalkerService.changeButtonCarousel.
        subscribe(async (request: object) => {
            this.defineCarouselContent(request);
        });
  }
    right() {
      if (this.buttonTextIndice === this.data.length - 1) {
          this.buttonTextIndice = 0;
      } else {
          this.buttonTextIndice += 1;
      }
      this.sendBuildsToComponents();
    }
    left() {
        if (this.buttonTextIndice === 0 ) {
            this.buttonTextIndice = this.data.length - 1 ;
        } else {
            this.buttonTextIndice -= 1;
        }
        this.sendBuildsToComponents();
  }

    defineCarouselContent(request) {

      switch (request.type ) {
          case 0:
              this.child = 0;
              break;
          case 1:
              this.child = 1;
              this.data = request.labs;
              this.buttonTextIndice = request.indice;
              break;
      }
  }


    sendBuildsToComponents() {
      this.headerTalkerService.sendBuilds(this.data[this.buttonTextIndice]);
    }


    getButtonText() {
        switch (this.child ) {
            case 0:
                return this.data[this.buttonTextIndice];
                break;
            case 1:
                return this.data[this.buttonTextIndice].numer;
                break;
        }
    }

    passToLogIn() {
        this.router.navigate(['ingresar']);
    }

    passToRegister() {
      this.router.navigate(['registrar']);
    }
}
