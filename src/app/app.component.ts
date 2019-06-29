import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/users/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'elabs';

  constructor(
      protected userService: UserService
  ) {
  }

  ngOnInit() {
    this.userService.getUsers()
        .subscribe(
            (data) => { // Success
              console.log(data);
            },
            (error) => {
              console.error(error);
            }
        );
  }
}
