import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  user: '';

  password: '';

  notUser = true;
  notPassword = true;
  correctData = true;

  users = new Map<string, string>();


  constructor() { }

  ngOnInit() {
    this.users.set('jmhc1995@hotmail.com', '1234');
    this.users.set('a', '123');
  }

  onSubmit() {
    console.log(this.user);
    console.log(this.password);
    this.notUser = true;
    this.notPassword = true;
    this.correctData = true;

    if ((this.user === undefined) || (this.user === '')) {
      this.notUser = false;

    }
    
    if ((this.password === undefined) || (this.password === '')) {
      this.notPassword = false;

    } else if ((!this.users.has(this.user)) || (this.users.get(this.user) !== this.password)) {
      this.correctData = false;
    }


  }

}
